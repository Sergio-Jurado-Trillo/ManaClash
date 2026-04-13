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
const pairing_util_1 = require("./utils/pairing.util");
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
        // Determinar el número de la siguiente ronda basándose en las rondas existentes
        const lastRound = await this.prisma.round.findFirst({
            where: { tournamentId },
            orderBy: { roundNumber: 'desc' },
        });
        const nextRoundNumber = (lastRound?.roundNumber ?? 0) + 1;
        console.log(`[DEBUG] Last round: ${lastRound?.roundNumber ?? 'none'}, nextRoundNumber: ${nextRoundNumber}`);
        console.log(`[DEBUG] totalRounds: ${tournament.totalRounds}`);
        if (nextRoundNumber > tournament.totalRounds) {
            throw new common_1.BadRequestException('All rounds already finished');
        }
        const isFinal = nextRoundNumber === tournament.totalRounds;
        // Fetch fresh player data with updated points
        let players = await this.prisma.player.findMany({
            where: { tournamentId },
        });
        console.log(`[DEBUG] Fetched ${players.length} players`);
        console.log(`[DEBUG] First 3 players:`, players.slice(0, 3).map(p => ({ name: p.name, points: p.totalPoints })));
        // Determine table assignment based on round number
        let tableAssignment;
        if (isFinal) {
            console.log(`[DEBUG] Using generateFinalRound`);
            // Final round: top 4 in a single table
            tableAssignment = (0, pairing_util_1.generateFinalRound)(players);
        }
        else if (nextRoundNumber === 1) { // First round (instead of currentRound === 0)
            console.log(`[DEBUG] Using generateRandomFirstRound`);
            // Round 1: completely random distribution
            tableAssignment = (0, pairing_util_1.generateRandomFirstRound)(players);
        }
        else {
            console.log(`[DEBUG] Using generateRankedRound`);
            // Round 2+: group by ranking (best players together)
            const sortedByRanking = [...players].sort((a, b) => {
                const pointsA = typeof a.totalPoints === 'string'
                    ? parseFloat(a.totalPoints)
                    : Number(a.totalPoints);
                const pointsB = typeof b.totalPoints === 'string'
                    ? parseFloat(b.totalPoints)
                    : Number(b.totalPoints);
                return pointsB - pointsA; // Descending order
            });
            console.log(`[DEBUG] Sorted players:`, sortedByRanking.slice(0, 3).map(p => ({ name: p.name, points: p.totalPoints })));
            tableAssignment = (0, pairing_util_1.generateRankedRound)(sortedByRanking);
        }
        console.log(`[DEBUG] tableAssignment - tables count: ${tableAssignment.tables.length}, byePlayers count: ${tableAssignment.byePlayers.length}`);
        // Create round record
        const round = await this.prisma.round.create({
            data: {
                roundNumber: nextRoundNumber,
                isFinal,
                tournament: { connect: { id: tournamentId } },
            },
        });
        console.log(`[DEBUG] Created round ${round.roundNumber}`);
        // Create tables
        let tableNumber = 1;
        for (const tableGroup of tableAssignment.tables) {
            if (tableGroup.length === 0) {
                // Skip empty tables
                continue;
            }
            const table = await this.prisma.table.create({
                data: {
                    tableNumber,
                    round: { connect: { id: round.id } },
                },
            });
            tableNumber++;
            // Add players to table
            for (const player of tableGroup) {
                await this.prisma.tablePlayer.create({
                    data: {
                        table: { connect: { id: table.id } },
                        player: { connect: { id: player.id } },
                    },
                });
            }
        }
        // Handle BYE players
        // BYE players get a special "table" with just themselves or together
        if (tableAssignment.byePlayers.length > 0) {
            const byeTable = await this.prisma.table.create({
                data: {
                    tableNumber,
                    round: { connect: { id: round.id } },
                },
            });
            for (const player of tableAssignment.byePlayers) {
                await this.prisma.tablePlayer.create({
                    data: {
                        table: { connect: { id: byeTable.id } },
                        player: { connect: { id: player.id } },
                    },
                });
            }
        }
        // Update tournament current round
        await this.prisma.tournament.update({
            where: { id: tournamentId },
            data: { currentRound: nextRoundNumber },
        });
        console.log(`[DEBUG] Updated tournament currentRound to ${nextRoundNumber}`);
        // Verify the update was successful
        const updatedTournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId },
        });
        console.log(`[DEBUG] Verification - tournament.currentRound in DB: ${updatedTournament?.currentRound}`);
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
        // Detectar si es una mesa de BYE (menos de 3 jugadores)
        const isBye = table.players.length < 3;
        let playersData;
        if (isBye) {
            // BYE: Asignar posición 1 a todos (ya que todos reciben puntos iguales)
            playersData = table.players.map((tp, index) => ({
                position: 1,
                isEliminated: false,
            }));
        }
        else {
            // Mesa normal: usar las posiciones registradas
            playersData = table.players.map(tp => ({
                position: tp.position,
                isEliminated: tp.lives === 0, // 0 vidas = eliminado
            }));
        }
        // Calcular puntos
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
        // Validar que TODAS las mesas hayan sido finalizadas
        for (const table of round.tables) {
            for (const tp of table.players) {
                if (tp.pointsAwarded === null || tp.pointsAwarded === undefined) {
                    throw new common_1.BadRequestException(`Table ${table.id} con jugador ${tp.playerId} aún no fue finalizada. Debes finalizar todas las mesas antes de terminar la ronda.`);
                }
            }
        }
        console.log(`[DEBUG] endRound - Processing round ${round.roundNumber}`);
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
        console.log(`[DEBUG] endRound - Updated player points for round ${round.roundNumber}`);
        // Get tournament to check status and update currentRound
        const tournament = await this.prisma.tournament.findUnique({
            where: { id: tournamentId }
        });
        if (!tournament) {
            throw new common_1.NotFoundException('Tournament not found');
        }
        // ✅ INCREMENTAR currentRound y comprobar si el torneo ha terminado
        const isLastRound = round.roundNumber >= tournament.totalRounds;
        console.log(`[DEBUG] endRound - round.roundNumber: ${round.roundNumber}, totalRounds: ${tournament.totalRounds}, isLastRound: ${isLastRound}`);
        await this.prisma.tournament.update({
            where: { id: tournamentId },
            data: {
                currentRound: round.roundNumber + 1, // ← INCREMENTAR a la siguiente ronda
                status: isLastRound ? 'FINISHED' : 'ONGOING',
            },
        });
        console.log(`[DEBUG] endRound - Tournament status: ${isLastRound ? 'FINISHED' : 'ONGOING'}`);
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