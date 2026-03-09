import { Body, Controller, Param, Post, Get, Delete } from '@nestjs/common';
import { UpdateScoreDto } from './dto/create-tournament.dto';
import { FinalizeMesaDto } from './dto/finalize-mesa.dto';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('tournaments')
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService) { }

    @Post()
    createTournament(@Body() createTournamentDto: CreateTournamentDto) {
        return this.tournamentsService.createTournament(createTournamentDto);
    }

    @Get()
    list() {
        return this.tournamentsService.listTournaments();
    }

    @Post('tables/:tableId/players/:playerId/score')
    updateScore(
        @Param('tableId') tableId: string,
        @Param('playerId') playerId: string,
        @Body() dto: UpdateScoreDto,
    ) {
        return this.tournamentsService.updateScore(tableId, playerId, dto);
    }

    @Post('tables/:tableId/finalize')
    finalizeMesa(
        @Param('tableId') tableId: string,
        @Body() finalizeMesaDto: FinalizeMesaDto,
    ) {
        return this.tournamentsService.finalizeMesa(
            tableId,
            finalizeMesaDto.hasTimedOut,
        );
    }

    @Get(':id')
    get(@Param('id') id: string) {
        return this.tournamentsService.getTournament(id);
    }

    @Post(':id/players')
    addPlayer(
        @Param('id') tournamentId: string,
        @Body() createPlayerDto: CreatePlayerDto,
    ) {
        return this.tournamentsService.addPlayer(
            tournamentId,
            createPlayerDto,
        );
    }

    @Get(':id/players')
    listPlayers(@Param('id') tournamentId: string) {
        return this.tournamentsService.listPlayers(tournamentId);
    }

    @Post(':id/rounds')
    startRound(@Param('id') tournamentId: string) {
        return this.tournamentsService.startRound(tournamentId);
    }

    @Get(':id/rounds')
    listRounds(@Param('id') tournamentId: string) {
        return this.tournamentsService.listRounds(tournamentId);
    }

    @Post(':id/rounds/:roundId/end')
    endRound(
        @Param('id') tournamentId: string,
        @Param('roundId') roundId: string,
    ) {
        return this.tournamentsService.endRound(tournamentId, roundId);
    }

    @Delete(':id')
    deleteTournament(@Param('id') id: string) {
        return this.tournamentsService.deleteTournament(id);
    }
}