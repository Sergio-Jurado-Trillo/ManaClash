import React from 'react';
import Table from './components/Table';

function App() {
  const players = [
    { name: 'Jugador 1', score: 5, position: 1 },
    { name: 'Jugador 2', score: 3, position: 2 },
    { name: 'Jugador 3', score: 2, position: 3 },
    { name: 'Jugador 4', score: 1, position: 4 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex flex-col items-center justify-center p-4">
      {/* simple proof that Tailwind is active */}
      <h1 className="text-4xl font-bold text-white mb-8">
        ¡Tailwind está funcionando! ✅
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-12">
        Botón de ejemplo
      </button>

      <Table players={players} />
    </div>
  );
}

export default App;