import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.8, ease: 'easeOut' },
    }),
};

const floatZoomGlow = {
    animate: {
        y: [0, -12, 0],
        scale: [1, 1.05, 1],
        boxShadow: [
            '0 0 40px rgba(168,85,247,0.4)',
            '0 0 70px rgba(168,85,247,0.8)',
            '0 0 40px rgba(168,85,247,0.4)',
        ],
        transition: {
            y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            scale: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
            boxShadow: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
        },
    },
};

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
            <nav className="p-4 flex justify-end space-x-4">
                <Link to="/" className="text-white hover:text-pink-400">Home</Link>
                <Link to="/tournaments" className="text-white hover:text-pink-400">Torneos</Link>
            </nav>
            {/* HERO */}
            <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Bienvenido a ManaClash ⚔️✨
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    Organiza torneos de Commander de forma automática y competitiva.
                </motion.p>

                <motion.img
                    src="./landing.png"
                    alt="Hero ManaClash"
                    className="w-4/5 md:w-3/4 lg:w-2/3 max-w-3xl rounded-2xl mb-8"
                    variants={floatZoomGlow}
                    animate="animate"
                />

                <motion.button
                    className="bg-pink-500 hover:bg-pink-600 active:scale-95 py-3 px-8 rounded-xl shadow-lg text-white font-semibold hover:shadow-pink-400/40 hover:shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                    onClick={() => (window.location.href = '/tournaments')}
                >
                    Crear Torneo
                </motion.button>
            </section>

            {/* FEATURES */}
            <section className="px-4 py-16 bg-gradient-to-b from-gray-900/80 to-gray-800/70">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    ¿Qué puedes hacer?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: 'Crear Torneos', desc: 'Organiza tus torneos en segundos y gestiona participantes fácilmente.' },
                        { title: 'Clasificación Dinámica', desc: 'Ranking en tiempo real para todos los jugadores.' },
                        { title: 'Mesas Automáticas', desc: 'Genera mesas de 4 jugadores sin complicaciones.' },
                        { title: 'Final Top 4', desc: 'La final se genera automáticamente según el rendimiento.' },
                    ].map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            className="bg-gray-800/90 rounded-2xl p-6 shadow-xl shadow-purple-700/20 hover:scale-105 transition-transform"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={idx + 1}
                        >
                            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                            <p className="text-gray-300 text-base md:text-lg">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="px-4 py-16 bg-gray-800/70">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Cómo Funciona
                </motion.h2>

                <ol className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg md:text-xl list-decimal list-inside marker:text-pink-400">
                    {[
                        'Crear un torneo y registrar jugadores.',
                        'Generar la primera ronda automáticamente.',
                        'Introducir resultados y actualizar clasificación.',
                        'Repetir rondas hasta llegar al Top 4.',
                        'Final automática con la mesa del Top 4.'
                    ].map((step, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            {step}
                        </motion.li>
                    ))}
                </ol>
            </section>

            {/* ROADMAP */}
            <section className="px-4 py-16 bg-gradient-to-b from-gray-900/80 to-gray-800/70">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    Roadmap
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        'Fase 1: MVP con torneo, registro de jugadores, rondas automáticas y final Top 4.',
                        'Fase 2: Autenticación, historial de torneos y prevención de emparejamientos repetidos.',
                        'Fase 3: Estadísticas avanzadas, ranking global, exportación de resultados y panel de administración.'
                    ].map((phase, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-800/90 rounded-2xl p-6 shadow-xl shadow-purple-700/20 hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-semibold text-pink-400 mr-2">{`Fase ${idx + 1}:`}</span>
                            {phase.replace(/^Fase \d+: /, '')}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <p>© {new Date().getFullYear()} ManaClash. Todos los derechos reservados.</p>
                <p>Contacto: <a href="mailto:sergiojurado973@gmail.com" className="underline hover:text-pink-400">sergiojurado973@gmail.com</a></p>
            </footer>

        </div>
    );
}

export default Home;