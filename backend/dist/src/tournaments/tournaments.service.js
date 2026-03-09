"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const scoring_util_1 = require("./utils/scoring.util");
let TournamentsService = class TournamentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTournament(data) {
        return this.prisma.tournament.create({
            data: {
                name: data.name,
                totalRounds: data.totalRounds,
            },
        });
    }
    async addPlayer(tournamentId, data) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
        });
        if (!tournament) {
            throw new common_1.NotFoundException('Tournament not found');
        }
        if (tournament.currentRound > 0) {
            throw new common_1.BadRequestException('Cannot add players after tournament has started');
        }
        return this.prisma.player.create({
            data: {
                name: data.name,
                tournamentId: tournamentId,
            },
        });
    }
    async listTournaments() {
        return this.prisma.tournament.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async getTournament(id) {
        return this.prisma.tournament.findUnique({
            where: { id },
            include: { players: true },
        });
    }
    async listPlayers(tournamentId) {
        return this.prisma.player.findMany({
            where: { tournamentId },
            orderBy: { totalPoints: 'desc' },
        });
    }
    async startRound(tournamentId) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
            include: { players: true },
        });
        if (!tournament)
            throw new common_1.NotFoundException('Tournament not found');
        if (tournament.currentRound >= tournament.totalRounds) {
            throw new common_1.BadRequestException('All rounds already finished');
        }
        // advance round
        const nextRoundNumber = tournament.currentRound + 1;
        const isFinal = nextRoundNumber === tournament.totalRounds;
        // determine players for this round
        let players = tournament.players;
        if (isFinal) {
            // Last round: top 4 by total points
            players = [...players].sort((a, b) => Number(b.totalPoints) - Number(a.totalPoints)).slice(0, 4);
        }
        else if (tournament.currentRound === 0) {
            // First round: random shuffle
            players = players.sort(() => Math.random() - 0.5);
        }
        else {
            // Swiss pairing: group by position from previous round
            // Players who finished 1st together, 2nd together, etc.
            const previousRound = await this.prisma.round.findFirst({
                where: {
                    tournamentId,
                    roundNumber: tournament.currentRound,
                },
                include: {
                    tables: {
                        include: {
                            players: {
                                include: {
                                    player: true,
                                },
                            },
                        },
                    },
                },
            });
            if (previousRound) {
                // Group players by their position in previous round
                const playersByPosition = new Map();
                for (const table of previousRound.tables) {
                    for (const tp of table.players) {
                        const pos = tp.position || 1;
                        if (!playersByPosition.has(pos)) {
                            playersByPosition.set(pos, []);
                        }
                        playersByPosition.get(pos).push(tp.player);
                    }
                }
                // Rebuild players array ordered by position groups
                players = [];
                for (let pos = 1; pos <= 4; pos++) {
                    const playersAtPos = playersByPosition.get(pos) || [];
                    // Sort by total points descending within same position
                    playersAtPos.sort((a, b) => Number(b.totalPoints) - Number(a.totalPoints));
                    players.push(...playersAtPos);
                }
            }
            else {
                // Fallback to points-based sorting if we can't find previous round
                players = [...players].sort((a, b) => Number(b.totalPoints) - Number(a.totalPoints));
            }
        }
        const round = await this.prisma.round.create({
            data: {
                roundNumber: nextRoundNumber,
                isFinal,
                tournament: { connect: { id: tournamentId } },
            },
        });
        // create tables grouping by 4 (or less for BYE)
        const chunkSize = 4;
        let tableNumber = 1;
        for (let i = 0; i < players.length; i += chunkSize) {
            const group = players.slice(i, i + chunkSize);
            const table = await this.prisma.table.create({
                data: {
                    tableNumber,
                    round: { connect: { id: round.id } },
                },
            });
            tableNumber++;
            for (const p of group) {
                await this.prisma.tablePlayer.create({
                    data: {
                        table: { connect: { id: table.id } },
                        player: { connect: { id: p.id } },
                    },
                });
            }
        }
        // update tournament currentRound
        await this.prisma.tournament.update({
            where: { id: tournamentId },
            data: { currentRound: nextRoundNumber },
        });
        return this.getTournament(tournamentId);
    }
    async updateScore(tableId, playerId, score) {
        // Validar inputs
        const validation = (0, scoring_util_1.validateScoreInput)(score.position, score.isEliminated);
        if (!validation.valid) {
            throw new common_1.BadRequestException(validation.error);
        }
        // Buscar el tablePlayer
        const tablePlayer = await this.prisma.tablePlayer.findFirst({
            where: { tableId, playerId },
        });
        if (!tablePlayer)
            throw new common_1.NotFoundException('Player not in table');
        // Actualizar posición e información de eliminación
        // Los puntos se calcularán después cuando se finalice la mesa
        return this.prisma.tablePlayer.update({
            where: { id: tablePlayer.id },
            data: {
                position: score.position,
                lives: score.isEliminated ? 0 : 1, // 0 = eliminado, 1 = vivo
            },
        });
    }
    async finalizeMesa(tableId, hasTimedOut) {
        // Obtener todos los jugadores de la mesa
        const table = await this.prisma.table.findUnique({
            where: { id: tableId },
            include: {
                players: {
                    include: { player: true },
                },
            },
        });
        if (!table)
            throw new common_1.NotFoundException('Table not found');
        // Preparar datos para calculadora de puntos
        const playersData = table.players.map(tp => ({
            position: tp.position,
            isEliminated: tp.lives === 0, // 0 vidas = eliminado
        }));
        // Calcular puntos (pasar el número de jugadores de la mesa para detectar bye)
        const scoringResults = (0, scoring_util_1.calculateTablePoints)(playersData, hasTimedOut, table.players.length);
        // Actualizar puntos en la mesa
        for (let i = 0; i < table.players.length; i++) {
            const tablePlayer = table.players[i];
            const result = scoringResults[i];
            if (tablePlayer) {
                await this.prisma.tablePlayer.update({
                    where: { id: tablePlayer.id },
                    data: {
                        pointsAwarded: result.pointsAwarded,
                        position: result.position,
                    },
                });
            }
        }
        return this.prisma.table.findUnique({
            where: { id: tableId },
            include: {
                players: {
                    include: { player: true },
                },
            },
        });
    }
    async endRound(tournamentId, roundId) {
        const round = await this.prisma.round.findUnique({
            where: { id: roundId },
            include: { tables: { include: { players: true } } },
        });
        if (!round)
            throw new common_1.NotFoundException('Round not found');
        // update player totals
        for (const table of round.tables) {
            // Detectar si esta mesa fue un BYE (menos de 3 jugadores)
            const isBye = table.players.length < 3;
            for (const tp of table.players) {
                if (tp.pointsAwarded) {
                    await this.prisma.player.update({
                        where: { id: tp.playerId },
                        data: { totalPoints: { increment: tp.pointsAwarded } },
                    });
                }
                // Contar win solo si es 1º Y NO fue BYE
                if (tp.position === 1 && !isBye) {
                    await this.prisma.player.update({
                        where: { id: tp.playerId },
                        data: { wins: { increment: 1 } },
                    });
                }
            }
        }
        // Checkear si el torneo debe finalizarse
        // (si se jugaron todas las rondas)
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId }
        });
        if (tournament && tournament.currentRound >= tournament.totalRounds) {
            await this.prisma.tournament.update({
                where: { id: tournamentId },
                data: { status: 'FINISHED' },
            });
        }
        return this.getTournament(tournamentId);
    }
    async listRounds(tournamentId) {
        // when returning rounds we want the frontend to know each player object
        // so include the related player record on each TablePlayer
        return this.prisma.round.findMany({
            where: { tournamentId },
            orderBy: { roundNumber: 'asc' },
            include: {
                tables: {
                    include: {
                        players: {
                            include: { player: true },
                        },
                    },
                },
            },
        });
    }
    async deleteTournament(id) {
        const tournament = await this.prisma.tournament.findUnique({
            where: { id },
        });
        if (!tournament) {
            throw new common_1.NotFoundException('Tournament not found');
        }
        // Delete all related data (cascade deletes through Prisma relations)
        // First delete TablePlayers
        await this.prisma.tablePlayer.deleteMany({
            where: {
                table: {
                    round: {
                        tournamentId: id,
                    },
                },
            },
        });
        // Delete Tables
        await this.prisma.table.deleteMany({
            where: {
                round: {
                    tournamentId: id,
                },
            },
        });
        // Delete Rounds
        await this.prisma.round.deleteMany({
            where: { tournamentId: id },
        });
        // Delete Players
        await this.prisma.player.deleteMany({
            where: { tournamentId: id },
        });
        // Delete Tournament
        return this.prisma.tournament.delete({
            where: { id },
        });
    }
};
exports.TournamentsService = TournamentsService;
exports.TournamentsService = TournamentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TournamentsService);
//# sourceMappingURL=tournaments.service.js.map