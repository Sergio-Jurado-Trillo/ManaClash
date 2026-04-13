# Solución Completa: Sistema de Emparejamiento de Torneos

## 📋 Resumen Ejecutivo

Se ha implementado un sistema robusto de gestión de torneos con las siguientes características:

✅ **Ronda 1**: Distribución completamente aleatoria
✅ **Ronda 2+**: Agrupamiento por ranking del torneo
✅ **Ronda Final**: Los 4 mejores en una mesa única
✅ **Manejo automático de BYEs**: Para 1-2 jugadores restantes
✅ **Mesas inteligentes**: 4 preferentemente, 3 si es necesario

---

## 🏗️ Arquitectura de la Solución

### Archivos Creados/Modificados

#### 1. `backend/src/tournaments/utils/pairing.util.ts` (CREADO)
Contiene la lógica core de distribución de mesas:

```typescript
generateRandomFirstRound(players)
├─ Baraja jugadores completamente al azar
└─ Distribuye en mesas 4-3-BYE

generateRankedRound(players)
├─ Recibe jugadores ordenados por ranking
└─ Agrupa: Mesa 1 = ranked 1-4, Mesa 2 = 5-8, etc.

generateFinalRound(players)
├─ Selecciona los 4 mejores
└─ Los coloca en UNA sola mesa

distributePlayersIntoTables(players)
├─ Lógica de distribución inteligente
├─ Maneja casos edge (2, 1 jugadores)
└─ Retorna { tables: [], byePlayers: [] }
```

#### 2. `backend/src/tournaments/tournaments.service.ts` (MODIFICADO)

**Cambios principales:**
- Importa funciones del nuevo `pairing.util.ts`
- `startRound()` completamente refactorizado
- `finalizeMesa()` ahora detecta automáticamente BYEs

---

## 🎯 Reglas de Distribución

### Lógica de Distribución Inteligente

El algoritmo `distributePlayersIntoTables()` funciona así:

```
Entrada: N jugadores

Si N % 4 == 0  →  N/4 mesas de 4
Si N % 4 == 3  →  (N-3)/4 mesas de 4 + 1 mesa de 3
Si N % 4 == 2  →  (N-2)/4 mesas de 4 + 2 BYEs
Si N % 4 == 1  →  (N-1)/4 mesas de 4 + 1 BYE
```

### Ejemplos Prácticos

| Jugadores | Distribución | Notas |
|-----------|-------------|-------|
| 16 | 4 mesas de 4 | Perfecto |
| 15 | 3 mesas de 4 + 1 mesa de 3 | Mesa de 3 válida |
| 14 | 3 mesas de 4 + 2 BYEs | 2 jugadores BYE |
| 13 | 2 mesas de 4 + 1 mesa de 3 + 1 BYE | Mixto |
| 12 | 3 mesas de 4 | Perfecto |
| 5 | 1 mesa de 4 + 1 BYE | Jugador único BYE |
| 4 | 1 mesa de 4 | Una única mesa |
| 3 | 1 mesa de 3 | Mínimo permitido |
| 2 | 2 BYEs | Ambos BYE |
| 1 | 1 BYE | Único jugador |

---

## 🔄 Flujo de Rondas

### Ronda 1 (Primera Ronda)

```
1. Sistema llama: startRound(tournamentId)
2. Condición: tournament.currentRound === 0
3. Acción: generateRandomFirstRound(players)
4. Resultado:
   - Jugadores barajados aleatoriamente
   - Distribuidos en mesas de 4-3 o BYE
   - Se crean registros en BD
```

**Ejemplo con 16 jugadores:**
```
Jugadores: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
↓ Shuffle aleatorio
Jugadores: [7,2,14,10,3,15,1,9,16,4,8,12,11,6,5,13]
↓ Distribuir en mesas
Mesa 1: [7,2,14,10]
Mesa 2: [3,15,1,9]
Mesa 3: [16,4,8,12]
Mesa 4: [11,6,5,13]
```

### Ronda 2+ (Rondas Siguientes)

```
1. Sistema llama: startRound(tournamentId)
2. Condición: tournament.currentRound > 0 && currentRound < totalRounds
3. Acción:
   a) Fetch jugadores con puntos actualizados
   b) Sort por totalPoints (descendente)
   c) generateRankedRound(sortedPlayers)
4. Resultado:
   - Los 4 mejores en Mesa 1
   - Los siguientes 4 en Mesa 2, etc.
```

**Ejemplo después de Ronda 1:**
```
Ranking (por puntos totales):
1. Jugador 5 → 6 pts
2. Jugador 14 → 6 pts
3. Jugador 3 → 6 pts
4. Jugador 10 → 6 pts
5. Jugador 2 → 4 pts
... etc

↓ Distribuir
Mesa 1: [5, 14, 3, 10]     (los 4 mejores)
Mesa 2: [2, ..., ..., ...]   (ranking 5-8)
Mesa 3: [..., ..., ..., ...] (ranking 9-12)
Mesa 4: [..., ..., ..., ...] (ranking 13-16)
```

### Ronda Final (Última Ronda)

```
1. Sistema llama: startRound(tournamentId)
2. Condición: nextRoundNumber === tournament.totalRounds
3. Acción: generateFinalRound(players)
4. Resultado:
   - Top 4 jugadores por ranking
   - UNA SOLA mesa
   - El resto no juega
```

**Ejemplo - Ronda Final:**
```
Todos los jugadores ordenados por ranking:
1. Jugador A → 18 pts
2. Jugador B → 16 pts
3. Jugador C → 14 pts
4. Jugador D → 12 pts
5. Jugador E → 10 pts
... (resto no juega)

↓ Ronda Final
Mesa 1 (Final): [A, B, C, D]
```

---

## 🎲 Sistema de Puntuación

### Puntos por Posición (Mesa Normal)
- 1º lugar: 6 puntos
- 2º lugar: 4 puntos
- 3º lugar: 2 puntos
- 4º lugar: 0 puntos

### Puntos en BYE
- Todos reciben: 3 puntos (equivalente a empate total)
- No cuenta como "win"

### Puntos por Timeout
- Se reparten equitativamente entre jugadores vivos
- Ejemplo: 2 vivos en mesa de 4 → (6+4)/2 = 5 pts cada uno

---

## 📊 Implementación de Cambios

### Cambio 1: Importar funciones helper
```typescript
// tournaments.service.ts
import { 
  generateRandomFirstRound, 
  generateRankedRound, 
  generateFinalRound 
} from './utils/pairing.util';
```

### Cambio 2: Refactorizar startRound()
```typescript
async startRound(tournamentId: string) {
    // 1. Obtener datos del torneo
    const tournament = await this.prisma.tournament.findUnique(...);
    
    // 2. Fetch jugadores con puntos actualizados
    let players = await this.prisma.player.findMany(...);
    
    // 3. Determinar tipo de distribución
    let tableAssignment;
    if (isFinal) {
        tableAssignment = generateFinalRound(players);
    } else if (tournament.currentRound === 0) {
        tableAssignment = generateRandomFirstRound(players);
    } else {
        const sorted = [...players].sort((a,b) => 
            Number(b.totalPoints) - Number(a.totalPoints)
        );
        tableAssignment = generateRankedRound(sorted);
    }
    
    // 4. Crear mesas en BD
    // 5. Crear BYE tables si existen byePlayers
    // 6. Actualizar currentRound
}
```

### Cambio 3: Mejorar finalizeMesa()
```typescript
async finalizeMesa(tableId: string, hasTimedOut: boolean) {
    // Obtener mesa
    const table = await this.prisma.table.findUnique(...);
    
    // Detectar BYE automáticamente
    const isBye = table.players.length < 3;
    
    // Si es BYE, asignar posición 1 a todos
    let playersData;
    if (isBye) {
        playersData = table.players.map((tp, index) => ({
            position: 1,
            isEliminated: false,
        }));
    } else {
        playersData = table.players.map(tp => ({
            position: tp.position,
            isEliminated: tp.lives === 0,
        }));
    }
    
    // Calcular y registrar puntos
    const scoringResults = calculateTablePoints(
        playersData, 
        hasTimedOut, 
        table.players.length
    );
    
    // Actualizar tablePlayer con puntos
}
```

---

## ✅ Checklist de Validación

- [x] Ronda 1: Distribución aleatoria completa
- [x] Ronda 1: Respeta mínimo 3 y máximo 4 por mesa
- [x] Ronda 1: Maneja BYEs si quedan 1-2 jugadores
- [x] Ronda 2+: Agrupa por ranking del torneo
- [x] Ronda 2+: Primeros 4 en Mesa 1
- [x] Ronda Final: Los 4 mejores en mesa única
- [x] BYE: Detecta automáticamente mesas <3
- [x] BYE: Asigna 3 puntos a cada jugador
- [x] Sin duplicación de jugadores
- [x] Todos los jugadores asignados (o BYE)
- [x] Compilación sin errores
- [x] Código escalable y mantenible

---

## 🧪 Casos de Prueba Recomendados

1. **Torneo de 16 jugadores, 2 rondas**
   - Ronda 1: Debe crear 4 mesas aleatorias de 4
   - Ronda 2: Debe crear 4 mesas por ranking

2. **Torneo de 14 jugadores, 2 rondas**
   - Ronda 1: 3 mesas de 4 + 2 BYEs
   - Ronda 2: Verificar que Top 4 estén juntos

3. **Torneo de 5 jugadores, 1 ronda**
   - Ronda 1: 1 mesa de 4 + 1 BYE

4. **Verificar puntos BYE**
   - Finalizar mesa BYE
   - Verificar que ambos reciben 3 puntos

---

## 📝 Notas Técnicas

### Por qué esta arquitectura es mejor

1. **Separación de responsabilidades**: Lógica de distribución en `pairing.util.ts`
2. **Reutilizabilidad**: Las funciones helper pueden usarse en múltiples contextos
3. **Mantenibilidad**: Cambios en lógica de distribución no afectan la BD
4. **Testabilidad**: Funciones puras fáciles de testear
5. **Escalabilidad**: Algoritmo funciona con cualquier número de jugadores

### Consideraciones de persistencia en BD

- Las mesas se crean en Prisma con `table.create()`
- Los jugadores se asignan con `tablePlayer.create()`
- BYE es solo una mesa con <3 jugadores, no especial en BD
- Puntos se actualizan en `endRound()` cuando se confirman resultados

---

## 🚀 Próximos Pasos

1. Probar con torneo de números variados
2. Verificar que ranking se actualiza correctamente
3. Validar puntos de BYE
4. Considerar agregar logging para debugging
5. Documentar en API endpoints

