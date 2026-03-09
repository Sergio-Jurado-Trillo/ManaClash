/**
 * Sistema de puntuación suizo con empates por tiempo
 *
 * Puntos por posición (sin empate):
 * - 1º: 6 puntos
 * - 2º: 4 puntos
 * - 3º: 2 puntos
 * - 4º: 0 puntos
 *
 * Sistema de empate por tiempo (reparto por supervivientes):
 * Si se acaba el tiempo, se reparten los puntos de las posiciones
 * no resueltas entre los jugadores vivos
 *
 * Sistema de BYE:
 * Si hay menos de 3 jugadores en la mesa, se otorga BYE.
 * Todos reciben 3 puntos (equivalente a empate total en pod de 4)
 * No cuenta como "win" (partida ganada)
 */
interface PlayerScore {
    position?: number | null;
    isEliminated: boolean;
}
interface ScoringResult {
    position: number;
    pointsAwarded: number;
    isTimeOut: boolean;
    isBye: boolean;
}
/**
 * Calcula los puntos otorgados a cada jugador en una mesa
 * @param players Array con información de los jugadores
 * @param hasTimedOut Si la mesa terminó por tiempo
 * @param tablePlayerCount Número de jugadores en la mesa (para detectar bye)
 * @returns Array con puntos otorgados a cada jugador
 */
export declare function calculateTablePoints(players: PlayerScore[], hasTimedOut?: boolean, tablePlayerCount?: number): ScoringResult[];
/**
 * Valida que los datos de puntuación sean correctos
 */
export declare function validateScoreInput(position?: number, isEliminated?: boolean): {
    valid: boolean;
    error?: string;
};
export {};
//# sourceMappingURL=scoring.util.d.ts.map