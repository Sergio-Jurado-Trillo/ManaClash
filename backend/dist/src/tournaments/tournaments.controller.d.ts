import { UpdateScoreDto } from './dto/create-tournament.dto';
import { FinalizeMesaDto } from './dto/finalize-mesa.dto';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    createTournament(createTournamentDto: CreateTournamentDto): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
    list(): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }[]>;
    updateScore(tableId: string, playerId: string, dto: UpdateScoreDto): Promise<{
        position: number | null;
        id: string;
        pointsAwarded: import("@prisma/client/runtime/library").Decimal | null;
        lives: number | null;
        tableId: string;
        playerId: string;
    }>;
    finalizeMesa(tableId: string, finalizeMesaDto: FinalizeMesaDto): Promise<{
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
    get(id: string): Promise<{
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
    addPlayer(tournamentId: string, createPlayerDto: CreatePlayerDto): Promise<{
        name: string;
        id: string;
        totalPoints: import("@prisma/client/runtime/library").Decimal;
        wins: number;
        byesReceived: number;
        tournamentId: string;
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
    deleteTournament(id: string): Promise<{
        name: string;
        totalRounds: number;
        id: string;
        currentRound: number;
        status: import("../../generated/prisma").TournamentStatus;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=tournaments.controller.d.ts.map