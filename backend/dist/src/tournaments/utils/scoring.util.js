"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTablePoints = calculateTablePoints;
exports.validateScoreInput = validateScoreInput;
/**
 * Calcula los puntos otorgados a cada jugador en una mesa
 * @param players Array con información de los jugadores
 * @param hasTimedOut Si la mesa terminó por tiempo
 * @param tablePlayerCount Número de jugadores en la mesa (para detectar bye)
 * @returns Array con puntos otorgados a cada jugador
 */
function calculateTablePoints(players, hasTimedOut = false, tablePlayerCount) {
    // Puntos por posición en sistema normal (sin empate)
    const pointsByPosition = [6, 4, 2, 0];
    // BYE points = empate total en pod de 4 = (6+4+2+0)/4 = 3
    const byePoints = 3;
    // Detectar BYE: si hay menos de 3 jugadores
    const isBye = tablePlayerCount ? tablePlayerCount < 3 : players.length < 3;
    if (isBye) {
        // BYE: Todos reciben 3 puntos (empate total)
        return players.map((player, index) => ({
            position: index + 1,
            pointsAwarded: byePoints,
            isTimeOut: false,
            isBye: true,
        }));
    }
    if (!hasTimedOut) {
        // Sistema normal: puntos basados en posición
        return players.map((player, index) => ({
            position: player.position ?? index + 1,
            pointsAwarded: pointsByPosition[Math.min(player.position ? player.position - 1 : index, 3)],
            isTimeOut: false,
            isBye: false,
        }));
    }
    // Sistema de empate por tiempo
    // Contar jugadores vivos y eliminados
    const aliveCount = players.filter(p => !p.isEliminated).length;
    const results = [];
    // Asignar puntos a eliminados (0) y repartir entre vivos
    let eliminatedCount = 0;
    for (let i = 0; i < players.length; i++) {
        if (players[i].isEliminated) {
            results[i] = {
                position: 4 - eliminatedCount,
                pointsAwarded: 0,
                isTimeOut: true,
                isBye: false,
            };
            eliminatedCount++;
        }
    }
    // Calcular puntos para vivos (suma de puntos disponibles / jugadores vivos)
    const availablePositions = [];
    for (let i = 0; i < aliveCount; i++) {
        availablePositions.push(i);
    }
    const totalPointsForAlive = availablePositions.reduce((sum, pos) => sum + pointsByPosition[pos], 0);
    const pointsPerAlive = Math.round((totalPointsForAlive / aliveCount) * 100) / 100;
    // Asignar puntos a vivos
    let aliveIndex = 0;
    for (let i = 0; i < players.length; i++) {
        if (!players[i].isEliminated) {
            results[i] = {
                position: i + 1,
                pointsAwarded: pointsPerAlive,
                isTimeOut: true,
                isBye: false,
            };
            aliveIndex++;
        }
    }
    return results;
}
/**
 * Valida que los datos de puntuación sean correctos
 */
function validateScoreInput(position, isEliminated) {
    if (position !== undefined && (position < 1 || position > 4)) {
        return { valid: false, error: 'Position must be between 1 and 4' };
    }
    if (isEliminated === undefined) {
        return { valid: false, error: 'isEliminated is required' };
    }
    return { valid: true };
}
//# sourceMappingURL=scoring.util.js.map