import { IsUUID, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class FinalizeMesaDto {
    @IsBoolean()
    hasTimedOut: boolean;
}
