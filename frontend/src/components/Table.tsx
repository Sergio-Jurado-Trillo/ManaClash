import React from 'react';

interface Player {
    name: string;
    score: number;
    position?: number; // 1=first, 2=second...
}

interface TableProps {
    players: Player[];
}

const positionColors: Record<number, string> = {
    1: 'bg-yellow-400 text-black',
    2: 'bg-gray-300 text-black',
    3: 'bg-orange-500 text-white',
    4: 'bg-red-500 text-white',
};

const Table: React.FC<TableProps> = ({ players }) => {
    return (
        <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-900 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-extrabold text-center text-white mb-6">Mesa de Torneo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {players.map((player, index) => {
                    const colorClass = player.position ? positionColors[player.position] : 'bg-gray-700 text-white';
                    return (
                        <div
                            key={index}
                            className={`${colorClass} p-6 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transform transition-all duration-300`}
                        >
                            {player.position && (
                                <span className="text-sm font-bold mb-2">
                                    {player.position === 1 ? '🥇' :
                                        player.position === 2 ? '🥈' :
                                            player.position === 3 ? '🥉' : '🏅'}
                                </span>
                            )}
                            <span className="text-lg font-semibold">{player.name}</span>
                            <span className="text-gray-200 mt-1">Puntos: {player.score}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;