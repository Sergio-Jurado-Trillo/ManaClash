import { PrismaService } from '../prisma/prisma.service';
import { CreateTournamentDto, UpdateScoreDto } from './dto/create-tournament.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class TournamentsService {
    private prisma;
    constructor(prisma: PrismaService);
    createTournament(data: CreateTournamentDto): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
    addPlayer(tournamentId: string, data: CreatePlayerDto): Promise<{
        name: string;
        id: string;
        totalPoints: import("@prisma/client/runtime/library").Decimal;
        wins: number;
        byesReceived: number;
        tournamentId: string;
    }>;
    listTournaments(): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }[]>;
    getTournament(id: string): Promise<{
        players: {
            name: string;
            id: string;
            totalPoints: import("@prisma/client/runtime/library").Decimal;
            wins: number;
            byesReceived: number;
            tournamentId: string;
        }[];
    } & {
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
    listPlayers(tournamentId: string): Promise<{
        name: string;
        id: string;
        totalPoints: import("@prisma/client/runtime/library").Decimal;
        wins: number;
        byesReceived: number;
        tournamentId: string;
    }[]>;
    startRound(tournamentId: string): Promise<{
        players: {
            name: string;
            id: string;
            totalPoints: import("@prisma/client/runtime/library").Decimal;
            wins: number;
            byesReceived: number;
            tournamentId: string;
        }[];
    } & {
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
    updateScore(tableId: string, playerId: string, score: UpdateScoreDto): Promise<{
        position: number | null;
        id: string;
        pointsAwarded: import("@prisma/client/runtime/library").Decimal | null;
        lives: number | null;
        tableId: string;
        playerId: string;
    }>;
    finalizeMesa(tableId: string, hasTimedOut: boolean): Promise<{
        players: ({
            player: {
                name: string;
                id: string;
                totalPoints: import("@prisma/client/runtime/library").Decimal;
                wins: number;
                byesReceived: number;
                tournamentId: string;
            };
        } & {
            position: number | null;
            id: string;
            pointsAwarded: import("@prisma/client/runtime/library").Decimal | null;
            lives: number | null;
            tableId: string;
            playerId: string;
        })[];
    } & {
        id: string;
        tableNumber: number;
        roundId: string;
    }>;
    endRound(tournamentId: string, roundId: string): Promise<{
        players: {
            name: string;
            id: string;
            totalPoints: import("@prisma/client/runtime/library").Decimal;
            wins: number;
            byesReceived: number;
            tournamentId: string;
        }[];
    } & {
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
    listRounds(tournamentId: string): Promise<({
        tables: ({
            players: ({
                player: {
                    name: string;
                    id: string;
                    totalPoints: import("@prisma/client/runtime/library").Decimal;
                    wins: number;
                    byesReceived: number;
                    tournamentId: string;
                };
            } & {
                position: number | null;
                id: string;
                pointsAwarded: import("@prisma/client/runtime/library").Decimal | null;
                lives: number | null;
                tableId: string;
                playerId: string;
            })[];
        } & {
            id: string;
            tableNumber: number;
            roundId: string;
        })[];
    } & {
        id: string;
        tournamentId: string;
        roundNumber: number;
        isFinal: boolean;
    })[]>;
    deleteTournament(id: string): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=tournaments.service.d.ts.map