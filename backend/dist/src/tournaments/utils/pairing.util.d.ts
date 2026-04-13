/**
 * SISTEMA DE EMPAREJAMIENTO DE MESAS
 *
 * Reglas:
 * 1. Ronda 1: Distribución completamente aleatoria
 * 2. Ronda 2+: Agrupar por ranking (mejores juntos)
 * 3. Tamaño de mesas: Máximo 4, Mínimo 3
 * 4. Jugadores restantes: BYE si son 2, o ajustar si es 1
 */
export interface TableAssignment {
    tables: any[][];
    byePlayers: any[];
}
/**
 * Distribuye jugadores en mesas respetando:
 * - Máximo 4 jugadores por mesa
 * - Mínimo 3 jugadores por mesa
 * - Si quedan 2: BYE para ambos
 * - Si queda 1: BYE para ese jugador
 *
 * @param players Array de jugadores ya ordenados
 * @returns Objeto con mesas y jugadores con BYE
 */
export declare function distributePlayersIntoTables(players: any[]): TableAssignment;
/**
 * Genera la distribución de mesas para la ronda aleatoria (Ronda 1)
 *
 * @param players Array de jugadores
 * @returns Objeto con mesas y BYEs
 */
export declare function generateRandomFirstRound(players: any[]): TableAssignment;
/**
 * Genera la distribución de mesas para rondas posteriores (Ronda 2+)
 * Agrupa por ranking: Los 4 mejores juntos, los siguientes 4, etc.
 *
 * @param players Array de jugadores ORDENADOS por ranking (mejor primero)
 * @returns Objeto con mesas y BYEs
 */
export declare function generateRankedRound(players: any[]): TableAssignment;
/**
 * Genera la mesa final (solo los 4 mejores en una mesa)
 *
 * @param players Array de jugadores ordenados
 * @returns Objeto con UNA sola mesa de 4 jugadores
 */
export declare function generateFinalRound(players: any[]): TableAssignment;
//# sourceMappingURL=pairing.util.d.ts.map