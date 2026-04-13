import React from 'react';
import { motion } from 'framer-motion';

interface Player {
    name: string;
    score: number;
    position?: number; // 1=first, 2=second...
    wins?: number;
}

interface TableProps {
    players: Player[];
    title?: string;
    showWins?: boolean;
    compact?: boolean;
}

// Colores profesionales alineados con el tema del sitio
const positionStyles: Record<number, { bg: string; border: string; badge: string; emoji: string }> = {
    1: {
        bg: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
        border: 'border-yellow-300 shadow-lg shadow-yellow-500/50',
        badge: 'bg-yellow-600 text-yellow-100',
        emoji: '🥇'
    },
    2: {
        bg: 'bg-gradient-to-br from-slate-200 to-slate-300',
        border: 'border-slate-400 shadow-lg shadow-slate-400/50',
        badge: 'bg-slate-500 text-slate-100',
        emoji: '🥈'
    },
    3: {
        bg: 'bg-gradient-to-br from-orange-400 to-orange-500',
        border: 'border-orange-400 shadow-lg shadow-orange-500/50',
        badge: 'bg-orange-600 text-orange-100',
        emoji: '🥉'
    },
    4: {
        bg: 'bg-gradient-to-br from-purple-600 to-purple-700',
        border: 'border-purple-500 shadow-lg shadow-purple-500/40',
        badge: 'bg-purple-800 text-purple-100',
        emoji: '4️⃣'
    },
};

const defaultStyle = {
    bg: 'bg-gradient-to-br from-gray-700 to-gray-800',
    border: 'border-gray-600 shadow-lg shadow-gray-600/30',
    badge: 'bg-gray-700 text-gray-200',
    emoji: '📍'
};

const Table: React.FC<TableProps> = ({ players, title = 'Clasificación', showWins = false, compact = false }) => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
                duration: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
    };

    return (
        <div className={`${compact ? 'max-w-full' : 'max-w-5xl mx-auto'} mt-8 px-4 py-8`}>
            {/* Título con decoración */}
            <div className="mb-8 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 mb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {title}
                </motion.h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Grid de jugadores con animaciones */}
            <motion.div
                className={`${compact ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {players.map((player, index) => {
                    const position = player.position || index + 1;
                    const style = positionStyles[position] || defaultStyle;
                    const isTopThree = position <= 3;

                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, translateY: -4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className={`
                                relative overflow-hidden rounded-2xl border-2 ${style.border}
                                ${style.bg} 
                                ${compact ? 'p-3 md:p-4' : 'p-6 md:p-8'}
                                transition-all duration-300
                                ${isTopThree ? 'ring-2 ring-offset-2 ring-offset-gray-900' : ''}
                            `}
                        >
                            {/* Brillo de fondo sutil */}
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full mix-blend-screen blur-3xl"></div>
                            </div>

                            {/* Contenido relativo */}
                            <div className="relative z-10">
                                {/* Posición y medalla */}
                                <div className={`flex items-center justify-between mb-${compact ? '2' : '3'}`}>
                                    <span className={`text-${compact ? '2xl' : '3xl'}`}>{style.emoji}</span>
                                    <span className={`${style.badge} ${compact ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'} rounded-full font-bold`}>
                                        #{position}
                                    </span>
                                </div>

                                {/* Nombre - truncado elegantemente */}
                                <h3 className={`
                                    ${compact ? 'text-sm md:text-base' : 'text-xl md:text-2xl'}
                                    font-bold truncate 
                                    ${position === 1 ? 'text-black' : position === 2 ? 'text-gray-900' : 'text-white'}
                                    mb-2
                                `}>
                                    {player.name}
                                </h3>

                                {/* Puntos destacado */}
                                <div className={`
                                    ${position === 1 ? 'text-black' : position === 2 ? 'text-gray-800' : 'text-white'}
                                    ${compact ? 'text-xs md:text-sm' : 'text-base md:text-lg'}
                                    font-semibold
                                    mb-${compact ? '1' : '2'}
                                `}>
                                    <span className="opacity-75">Puntos:</span> <span className="font-bold text-xl">{player.score}</span>
                                </div>

                                {/* Wins si es aplicable */}
                                {showWins && player.wins !== undefined && (
                                    <div className={`
                                        ${position === 1 ? 'text-black' : position === 2 ? 'text-gray-700' : 'text-gray-300'}
                                        ${compact ? 'text-xs' : 'text-sm'}
                                    `}>
                                        <span className="opacity-75">Victorias:</span> <span className="font-bold">{player.wins}</span>
                                    </div>
                                )}

                                {/* Barra de progreso visual */}
                                <div className={`mt-${compact ? '2' : '3'} h-1 bg-black bg-opacity-20 rounded-full overflow-hidden`}>
                                    <motion.div
                                        className={`h-full ${position === 1 ? 'bg-black opacity-40' : 'bg-white opacity-50'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${Math.min((player.score / 18) * 100, 100)}%` }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 1 }}
                                    ></motion.div>
                                </div>
                            </div>

                            {/* Decoración de esquina para top 3 */}
                            {isTopThree && (
                                <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                                        <circle cx="80" cy="20" r="30" fill="currentColor" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Estadísticas de resumen opcional */}
            {!compact && players.length > 0 && (
                <motion.div
                    className="mt-12 p-6 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-500/30 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">🥇 Máx. Puntos</p>
                            <p className="text-2xl font-bold text-yellow-400">
                                {Math.max(...players.map(p => p.score))}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">📊 Promedio</p>
                            <p className="text-2xl font-bold text-pink-400">
                                {(players.reduce((sum, p) => sum + p.score, 0) / players.length).toFixed(1)}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm mb-1">👥 Participantes</p>
                            <p className="text-2xl font-bold text-purple-400">{players.length}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Table;