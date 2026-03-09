import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

interface Player {
    id: string;
    name: string;
    totalPoints: string;
    wins: number;
}

interface TablePlayer {
    id: string;
    player?: Player;
    pointsAwarded?: number;
    position?: number;
    lives?: number;
}

interface Table {
    id: string;
    tableNumber: number;
    players: TablePlayer[];
}

interface Round {
    id: string;
    roundNumber: number;
    isFinal: boolean;
    tables: Table[];
}

interface Tournament {
    id: string;
    name: string;
    totalRounds: number;
    currentRound: number;
    status: string;
    players: Player[];
}

// Estado para trackear entrada de scores por jugador
interface PlayerScoreInput {
    position?: number;
    isEliminated: boolean;
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ManageTournament: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [rounds, setRounds] = useState<Round[]>([]);
    const [newPlayer, setNewPlayer] = useState('');

    // scoreMap ahora almacena posición e isEliminated
    const [scoreMap, setScoreMap] = useState<Record<string, PlayerScoreInput>>({});

    // trackear qué mesas terminaron por tiempo
    const [mesasTimeOut, setMesasTimeOut] = useState<Record<string, boolean>>({});

    // trackear qué mesas ya terminaron
    const [mesasFinalizadas, setMesasFinalizadas] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!id) return;
        fetchTournament();
        loadRounds();
    }, [id]);

    const fetchTournament = async () => {
        const res = await fetch(`${API_BASE}/tournaments/${id}`);
        if (res.ok) {
            const data: Tournament = await res.json();
            setTournament(data);
        }
    };

    const loadRounds = async () => {
        const res = await fetch(`${API_BASE}/tournaments/${id}/rounds`);
        if (res.ok) {
            const data: Round[] = await res.json();
            setRounds(data);
        }
    };

    const addPlayer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;
        const res = await fetch(`${API_BASE}/tournaments/${id}/players`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newPlayer }),
        });
        if (res.ok) {
            setNewPlayer('');
            fetchTournament();
        }
    };

    const startRound = async () => {
        if (!id) return;
        await fetch(`${API_BASE}/tournaments/${id}/rounds`, { method: 'POST' });
        // Limpiar estados al empezar nueva ronda
        setScoreMap({});
        setMesasTimeOut({});
        setMesasFinalizadas(new Set());
        await fetchTournament();
        await loadRounds();
    };

    const deleteTournament = async () => {
        if (!id || !tournament) return;

        const confirmed = window.confirm(
            `¿Estás seguro de que deseas eliminar el torneo "${tournament.name}"? Esta acción no se puede deshacer.`
        );

        if (!confirmed) return;

        try {
            const res = await fetch(`${API_BASE}/tournaments/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                navigate('/tournaments');
            } else {
                alert('Error al eliminar el torneo');
            }
        } catch (error) {
            console.error('Error deleting tournament:', error);
            alert('Error al eliminar el torneo');
        }
    };

    // Actualizar puntuación del jugador
    const updatePlayerScore = (tableId: string, playerId: string, position?: number, isEliminated?: boolean) => {
        const key = `${tableId}-${playerId}`;
        const current = scoreMap[key] || { position: undefined, isEliminated: false };

        setScoreMap(prev => ({
            ...prev,
            [key]: {
                position: position !== undefined ? position : current.position,
                isEliminated: isEliminated !== undefined ? isEliminated : current.isEliminated,
            },
        }));
    };

    // Finalizar una mesa específica (calcula puntos automáticamente)
    const finalizeMesa = async (tableId: string) => {
        const hasTimedOut = mesasTimeOut[tableId] || false;

        // Primero, enviar todas las posiciones de esta mesa
        const table = currentRound?.tables.find(t => t.id === tableId);
        if (!table) return;

        try {
            // Actualizar posiciones para todos los jugadores de esta mesa
            const updatePromises = table.players.map(tp => {
                if (!tp.player) return Promise.resolve();
                const record = scoreMap[`${tableId}-${tp.player.id}`];
                if (!record) return Promise.resolve();

                return fetch(`${API_BASE}/tournaments/tables/${tableId}/players/${tp.player.id}/score`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        position: record.position,
                        isEliminated: record.isEliminated,
                    }),
                });
            });

            await Promise.all(updatePromises);

            // Luego, finalizar la mesa (calcula puntos)
            const finalizeRes = await fetch(`${API_BASE}/tournaments/tables/${tableId}/finalize`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ hasTimedOut }),
            });

            if (finalizeRes.ok) {
                // Marcar esta mesa como finalizada
                setMesasFinalizadas(prev => new Set([...prev, tableId]));
                // Recargar para ver los puntos calculados
                await loadRounds();
            }
        } catch (error) {
            console.error('Error finalizando mesa:', error);
        }
    };

    const endRound = async () => {
        if (!id || !tournament) return;
        const round = rounds.find(r => r.roundNumber === tournament.currentRound);
        if (!round) return;

        try {
            const endResponse = await fetch(`${API_BASE}/tournaments/${id}/rounds/${round.id}/end`, { method: 'POST' });

            if (!endResponse.ok) {
                console.error('Failed to end round');
                return;
            }

            // Limpiar estados
            setScoreMap({});
            setMesasTimeOut({});
            setMesasFinalizadas(new Set());

            await loadRounds();
            await fetchTournament();
        } catch (error) {
            console.error('Error ending round:', error);
        }
    };

    const currentRound = rounds.find(r => r.roundNumber === tournament?.currentRound);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white p-8">
            <nav className="p-4 flex justify-end space-x-4">
                <Link to="/" className="text-white hover:text-pink-400">Home</Link>
                <Link to="/tournaments" className="text-white hover:text-pink-400">Torneos</Link>
                <Link to="/leaderboard" className="text-white hover:text-pink-400">Leaderboard</Link>
            </nav>
            <h1 className="text-3xl mb-4">Gestionar torneo</h1>
            {tournament && (
                <div className="mb-8 p-4 bg-gray-800 rounded flex justify-between items-start">
                    <div>
                        <p className="text-xl font-semibold">Nombre: {tournament.name}</p>
                        <p className="text-gray-300">Ronda actual: {tournament.currentRound} / {tournament.totalRounds}</p>
                    </div>
                    <button
                        onClick={deleteTournament}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        🗑️ Eliminar torneo
                    </button>
                </div>
            )}

            {tournament && tournament.currentRound === 0 && (
                <div className="mb-8">
                    <h2 className="text-xl mb-2">Agregar jugadores</h2>
                    <form onSubmit={addPlayer} className="flex space-x-2">
                        <input
                            className="px-4 py-2 rounded bg-gray-800"
                            placeholder="Nombre"
                            value={newPlayer}
                            onChange={e => setNewPlayer(e.target.value)}
                            required
                        />
                        <button type="submit" className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">Agregar</button>
                    </form>
                    <ul className="mt-4">
                        {tournament.players.map(p => (
                            <li key={p.id}>{p.name}</li>
                        ))}
                    </ul>
                    {tournament.players.length >= 1 && (
                        <button onClick={startRound} className="mt-4 bg-green-500 px-6 py-2 rounded hover:bg-green-600">Empezar torneo</button>
                    )}
                </div>
            )}

            {currentRound && (
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">Ronda {currentRound.roundNumber} {currentRound.isFinal ? '(Final)' : ''}</h2>
                    <div className="mb-4 p-4 bg-blue-900 rounded text-sm">
                        <p className="font-semibold mb-2">📋 Sistema de Puntuación (Suizo):</p>
                        <ul className="text-xs space-y-1 ml-4">
                            <li>• 1º lugar: 6 puntos</li>
                            <li>• 2º lugar: 4 puntos</li>
                            <li>• 3º lugar: 2 puntos</li>
                            <li>• 4º lugar: 0 puntos</li>
                            <li className="mt-2">💡 Si la mesa termina por tiempo, se reparten los puntos entre los vivos</li>
                            <li className="mt-2">📌 BYE: 3 puntos (equivale a empate en pod de 4)</li>
                        </ul>
                    </div>

                    {currentRound.tables.map(table => {
                        const isFinalized = mesasFinalizadas.has(table.id);
                        const isBye = table.players.length < 3;  // Bye si hay <3 jugadores
                        const maxPosition = table.players.length;

                        return (
                            <div key={table.id} className={`mb-6 p-4 rounded ${isFinalized ? 'bg-green-900' : isBye ? 'bg-blue-900' : 'bg-gray-800'}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">Mesa {table.tableNumber}</h3>
                                    {isBye && !isFinalized && (
                                        <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded">
                                            BYE - 3 pts cada uno
                                        </span>
                                    )}
                                    {isBye && isFinalized && (
                                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded">
                                            ✓ BYE - Finalizado
                                        </span>
                                    )}
                                </div>

                                {isBye && !isFinalized && (
                                    <div className="mb-4 p-3 bg-yellow-800 rounded text-xs text-yellow-100">
                                        Mesa con {table.players.length} jugador{table.players.length > 1 ? 'es' : ''}: Se otorga BYE automático.
                                        <br />Todos recibirán 3 puntos (como empate) sin contar como partida ganada.
                                    </div>
                                )}

                                {/* Mostrar jugadores */}
                                {table.players.map(tp => (
                                    <div key={tp.id} className="flex space-x-2 mb-2 items-center text-sm">
                                        <span className="w-32">{tp.player?.name || '???'}</span>

                                        {isBye && !isFinalized ? (
                                            // BYE: No permitir ingresar datos, mostrar "BYE"
                                            <span className="px-3 py-1 bg-yellow-700 rounded text-yellow-100 font-semibold">
                                                BYE
                                            </span>
                                        ) : (
                                            // PARTIDA NORMAL: Posición + Eliminado
                                            <>
                                                {/* Posición - validar máximo según jugadores */}
                                                <select
                                                    className="w-20 px-2 py-1 rounded bg-gray-700 disabled:opacity-50"
                                                    disabled={isFinalized}
                                                    value={tp.player ? scoreMap[`${table.id}-${tp.player.id}`]?.position ?? '' : ''}
                                                    onChange={e => {
                                                        if (tp.player) {
                                                            const pos = e.target.value ? parseInt(e.target.value, 10) : undefined;
                                                            updatePlayerScore(table.id, tp.player.id, pos, undefined);
                                                        }
                                                    }}
                                                >
                                                    <option value="">Pos</option>
                                                    {maxPosition >= 1 && <option value="1">1º</option>}
                                                    {maxPosition >= 2 && <option value="2">2º</option>}
                                                    {maxPosition >= 3 && <option value="3">3º</option>}
                                                    {maxPosition >= 4 && <option value="4">4º</option>}
                                                </select>

                                                {/* Eliminado */}
                                                <label className="flex items-center space-x-1 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        disabled={isFinalized}
                                                        checked={tp.player ? scoreMap[`${table.id}-${tp.player.id}`]?.isEliminated ?? false : false}
                                                        onChange={e => {
                                                            if (tp.player) {
                                                                updatePlayerScore(table.id, tp.player.id, undefined, e.target.checked);
                                                            }
                                                        }}
                                                        className="disabled:opacity-50"
                                                    />
                                                    <span className="text-xs">Elim.</span>
                                                </label>
                                            </>
                                        )}

                                        {/* Mostrar puntos si la mesa está finalizada */}
                                        {isFinalized && tp.pointsAwarded !== undefined && (
                                            <span className="w-12 text-right font-semibold text-yellow-300">{tp.pointsAwarded} pts</span>
                                        )}
                                    </div>
                                ))}

                                {/* Checkbox para timeout - solo si NO es BYE */}
                                {!isBye && (
                                    <div className="mt-3 pt-3 border-t border-gray-600 flex items-center space-x-2">
                                        <label className="flex items-center space-x-1 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                disabled={isFinalized}
                                                checked={mesasTimeOut[table.id] || false}
                                                onChange={e => {
                                                    setMesasTimeOut(prev => ({
                                                        ...prev,
                                                        [table.id]: e.target.checked,
                                                    }));
                                                }}
                                                className="disabled:opacity-50"
                                            />
                                            <span className="text-xs font-semibold">Mesa terminada por tiempo</span>
                                        </label>
                                    </div>
                                )}

                                {/* Botón finalizar mesa */}
                                {!isFinalized && (
                                    <button
                                        onClick={() => finalizeMesa(table.id)}
                                        className="mt-3 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm font-semibold w-full"
                                    >
                                        ✓ Finalizar mesa {isBye ? '(BYE)' : ''}
                                    </button>
                                )}
                                {isFinalized && (
                                    <div className="mt-3 text-center text-sm font-semibold text-green-400">
                                        ✓ Mesa finalizada
                                    </div>
                                )}
                            </div>
                        );
                    })}

                    {/* Solo mostrar botón terminar ronda si todas están finalizadas */}
                    {mesasFinalizadas.size === currentRound.tables.length ? (
                        <button onClick={endRound} className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-semibold w-full">
                            ✓ Terminar ronda
                        </button>
                    ) : (
                        <div className="mt-4 p-4 bg-yellow-900 rounded text-center text-sm">
                            Finaliza todas las mesas antes de terminar la ronda ({mesasFinalizadas.size}/{currentRound.tables.length})
                        </div>
                    )}
                </div>
            )}

            {tournament && tournament.currentRound > 0 && !currentRound && (
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">Clasificación - Ronda {tournament.currentRound - 1} completada</h2>
                    <ol className="space-y-2">
                        {tournament.players
                            .slice()
                            .sort((a, b) => parseFloat(b.totalPoints) - parseFloat(a.totalPoints))
                            .map((p, idx) => (
                                <li key={p.id} className="flex justify-between p-4 bg-gray-800 rounded">
                                    <span>{idx + 1}. {p.name}</span>
                                    <div className="text-right">
                                        <div>{p.totalPoints} pts</div>
                                        <div className="text-sm text-gray-400">{p.wins} wins</div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                    {tournament.currentRound < tournament.totalRounds && (
                        <button onClick={startRound} className="mt-4 bg-green-500 px-6 py-2 rounded hover:bg-green-600">Siguiente ronda</button>
                    )}
                    {tournament.currentRound === tournament.totalRounds && (
                        <div className="mt-4 p-4 bg-green-900 rounded">
                            <p className="text-lg font-bold">🏆 ¡Torneo completado!</p>
                        </div>
                    )}
                </div>
            )}

            {tournament && tournament.currentRound > 0 && (
                <div className="mb-8">
                    <h2 className="text-2xl mb-4">Clasificación general</h2>
                    <ol className="space-y-2">
                        {tournament.players
                            .slice()
                            .sort((a, b) => parseFloat(b.totalPoints) - parseFloat(a.totalPoints))
                            .map((p, idx) => (
                                <li key={p.id} className="flex justify-between p-4 bg-gray-700 rounded">
                                    <span>{idx + 1}. {p.name}</span>
                                    <div className="text-right">
                                        <div>{p.totalPoints} pts</div>
                                        <div className="text-sm text-gray-300">{p.wins} wins</div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default ManageTournament;