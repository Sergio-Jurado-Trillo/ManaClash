import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Player {
    id: string;
    name: string;
    totalPoints: string;
    wins: number;
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const LeaderboardPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [players, setPlayers] = useState<Player[]>([]);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        if (!id) return;
        fetch(`${API_BASE}/tournaments/${id}/players`)
            .then(r => r.json())
            .then(setPlayers)
            .catch(console.error);
    }, [id]);

    const addPlayer = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;
        const res = await fetch(`${API_BASE}/tournaments/${id}/players`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName }),
        });
        if (res.ok) {
            const p: Player = await res.json();
            setPlayers(prev => [...prev, p]);
            setNewName('');
        }
    };

    const sorted = [...players].sort((a, b) => parseFloat(b.totalPoints) - parseFloat(a.totalPoints));

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white p-8">
            <nav className="p-4 flex justify-end space-x-4">
                <Link to="/" className="text-white hover:text-pink-400">Home</Link>
                <Link to="/tournaments" className="text-white hover:text-pink-400">Torneos</Link>
                <Link to="/leaderboard" className="text-white hover:text-pink-400">Leaderboard</Link>
            </nav>
            <h1 className="text-3xl mb-4">Leaderboard</h1>
            {id && (
                <form onSubmit={addPlayer} className="mb-8 space-y-4">
                    <input
                        className="w-full px-4 py-2 rounded bg-gray-800"
                        placeholder="Nombre del jugador"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-pink-500 px-6 py-2 rounded hover:bg-pink-600">
                        Añadir jugador
                    </button>
                </form>
            )}
            <ol className="space-y-2">
                {sorted.map(p => (
                    <li key={p.id} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                        <span>{p.name}</span>
                        <span>{p.totalPoints} pts</span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default LeaderboardPage;
