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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentsController = void 0;
const common_1 = require("@nestjs/common");
const create_tournament_dto_1 = require("./dto/create-tournament.dto");
const finalize_mesa_dto_1 = require("./dto/finalize-mesa.dto");
const tournaments_service_1 = require("./tournaments.service");
const create_tournament_dto_2 = require("./dto/create-tournament.dto");
const create_player_dto_1 = require("./dto/create-player.dto");
let TournamentsController = class TournamentsController {
    constructor(tournamentsService) {
        this.tournamentsService = tournamentsService;
    }
    createTournament(createTournamentDto) {
        return this.tournamentsService.createTournament(createTournamentDto);
    }
    list() {
        return this.tournamentsService.listTournaments();
    }
    updateScore(tableId, playerId, dto) {
        return this.tournamentsService.updateScore(tableId, playerId, dto);
    }
    finalizeMesa(tableId, finalizeMesaDto) {
        return this.tournamentsService.finalizeMesa(tableId, finalizeMesaDto.hasTimedOut);
    }
    get(id) {
        return this.tournamentsService.getTournament(id);
    }
    addPlayer(tournamentId, createPlayerDto) {
        return this.tournamentsService.addPlayer(tournamentId, createPlayerDto);
    }
    listPlayers(tournamentId) {
        return this.tournamentsService.listPlayers(tournamentId);
    }
    startRound(tournamentId) {
        return this.tournamentsService.startRound(tournamentId);
    }
    listRounds(tournamentId) {
        return this.tournamentsService.listRounds(tournamentId);
    }
    endRound(tournamentId, roundId) {
        return this.tournamentsService.endRound(tournamentId, roundId);
    }
    deleteTournament(id) {
        return this.tournamentsService.deleteTournament(id);
    }
};
exports.TournamentsController = TournamentsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tournament_dto_2.CreateTournamentDto]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "createTournament", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('tables/:tableId/players/:playerId/score'),
    __param(0, (0, common_1.Param)('tableId')),
    __param(1, (0, common_1.Param)('playerId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, create_tournament_dto_1.UpdateScoreDto]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "updateScore", null);
__decorate([
    (0, common_1.Post)('tables/:tableId/finalize'),
    __param(0, (0, common_1.Param)('tableId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, finalize_mesa_dto_1.FinalizeMesaDto]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "finalizeMesa", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(':id/players'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_player_dto_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "addPlayer", null);
__decorate([
    (0, common_1.Get)(':id/players'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "listPlayers", null);
__decorate([
    (0, common_1.Post)(':id/rounds'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "startRound", null);
__decorate([
    (0, common_1.Get)(':id/rounds'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "listRounds", null);
__decorate([
    (0, common_1.Post)(':id/rounds/:roundId/end'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('roundId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "endRound", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamentsController.prototype, "deleteTournament", null);
exports.TournamentsController = TournamentsController = __decorate([
    (0, common_1.Controller)('tournaments'),
    __metadata("design:paramtypes", [tournaments_service_1.TournamentsService])
], TournamentsController);
//# sourceMappingURL=tournaments.controller.js.map