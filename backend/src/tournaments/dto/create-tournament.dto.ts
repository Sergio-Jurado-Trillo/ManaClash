import { IsInt, IsNotEmpty, IsString, Min, IsBoolean, Max } from 'class-validator';

export class CreateTournamentDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @Min(1)
    totalRounds: number;
}

export class UpdateScoreDto {
    @IsInt()
    @Min(1)
    @Max(4)
    position: number;

    @IsBoolean()
    isEliminated: boolean;
}
