"use strict";
/**
 * SISTEMA DE EMPAREJAMIENTO DE MESAS
 *
 * Reglas:
 * 1. Ronda 1: Distribución completamente aleatoria
 * 2. Ronda 2+: Agrupar por ranking (mejores juntos)
 * 3. Tamaño de mesas: Máximo 4, Mínimo 3
 * 4. Jugadores restantes: BYE si son 2, o ajustar si es 1
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.distributePlayersIntoTables = distributePlayersIntoTables;
exports.generateRandomFirstRound = generateRandomFirstRound;
exports.generateRankedRound = generateRankedRound;
exports.generateFinalRound = generateFinalRound;
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
function distributePlayersIntoTables(players) {
    const tables = [];
    const byePlayers = [];
    if (players.length === 0) {
        return { tables, byePlayers };
    }
    const totalPlayers = players.length;
    const remaining = totalPlayers % 4;
    // Estrategia simple y clara:
    // 1. Crear mesas de 4 consecutivamente
    // 2. Si quedan 3, una mesa de 3
    // 3. Si quedan 2, BYE para ambos
    // 4. Si queda 1, BYE para ese
    // Calcular cuántas mesas de 4 podemos hacer
    // Pero si remaining es 1 o 2, solo hacemos 1 mesa menos de 4
    let numTablesOf4 = Math.floor(totalPlayers / 4);
    // Ajuste: si remaining es 1 o 2, la última mesa de 4 se convierte en BYE
    if (remaining === 1 || remaining === 2) {
        numTablesOf4 = Math.floor((totalPlayers - remaining) / 4);
    }
    // Crear mesas de 4
    for (let i = 0; i < numTablesOf4; i++) {
        const start = i * 4;
        const end = start + 4;
        tables.push(players.slice(start, end));
    }
    // Manejar jugadores restantes
    const startIdx = numTablesOf4 * 4;
    if (remaining === 3) {
        tables.push(players.slice(startIdx, startIdx + 3));
    }
    else if (remaining === 2) {
        byePlayers.push(...players.slice(startIdx, startIdx + 2));
    }
    else if (remaining === 1) {
        byePlayers.push(players[startIdx]);
    }
    return { tables, byePlayers };
}
/**
 * Genera la distribución de mesas para la ronda aleatoria (Ronda 1)
 *
 * @param players Array de jugadores
 * @returns Objeto con mesas y BYEs
 */
function generateRandomFirstRound(players) {
    // Barajar completamente al azar
    const shuffled = [...players].sort(() => Math.random() - 0.5);
    // Distribuir en mesas
    return distributePlayersIntoTables(shuffled);
}
/**
 * Genera la distribución de mesas para rondas posteriores (Ronda 2+)
 * Agrupa por ranking: Los 4 mejores juntos, los siguientes 4, etc.
 *
 * @param players Array de jugadores ORDENADOS por ranking (mejor primero)
 * @returns Objeto con mesas y BYEs
 */
function generateRankedRound(players) {
    // Los jugadores ya vienen ordenados por ranking
    // Solo necesitamos distribuirlos en mesas
    return distributePlayersIntoTables(players);
}
/**
 * Genera la mesa final (solo los 4 mejores en una mesa)
 *
 * @param players Array de jugadores ordenados
 * @returns Objeto con UNA sola mesa de 4 jugadores
 */
function generateFinalRound(players) {
    // Tomar solo los 4 mejores, asegurando conversión de Decimal
    const topFour = players
        .sort((a, b) => {
        const pointsA = typeof a.totalPoints === 'string'
            ? parseFloat(a.totalPoints)
            : Number(a.totalPoints);
        const pointsB = typeof b.totalPoints === 'string'
            ? parseFloat(b.totalPoints)
            : Number(b.totalPoints);
        return pointsB - pointsA;
    })
        .slice(0, 4);
    return {
        tables: [topFour],
        byePlayers: [],
    };
}
//# sourceMappingURL=pairing.util.js.map