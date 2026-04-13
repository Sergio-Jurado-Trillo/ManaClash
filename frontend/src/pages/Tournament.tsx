import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Tournament {
    id: string;
    name: string;
    totalRounds: number;
    currentRound: number;
    status: string;
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const TournamentPage: React.FC = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [name, setName] = useState('');
    const [rounds, setRounds] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_BASE}/tournaments`)
            .then(r => r.json())
            .then(setTournaments)
            .catch(console.error);
    }, []);

    const create = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${API_BASE}/tournaments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, totalRounds: rounds }),
        });
        if (res.ok) {
            const t: Tournament = await res.json();
            setTournaments(prev => [...prev, t]);
            setName('');
            setRounds(3);
            navigate(`/tournaments/${t.id}/manage`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white p-8">
            <nav className="p-4 flex justify-end space-x-4">
                <Link to="/" className="text-white hover:text-pink-400">Home</Link>
                <Link to="/tournaments" className="text-white hover:text-pink-400">Torneos</Link>
            </nav>
            <h1 className="text-3xl mb-4">Torneos</h1>
            <form onSubmit={create} className="mb-8 space-y-4">
                <input
                    className="w-full px-4 py-2 rounded bg-gray-800"
                    placeholder="Nombre del torneo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    min={1}
                    className="w-full px-4 py-2 rounded bg-gray-800"
                    value={rounds}
                    onChange={e => setRounds(parseInt(e.target.value, 10))}
                    required
                />
                <button type="submit" className="bg-pink-500 px-6 py-2 rounded hover:bg-pink-600">
                    Crear torneo
                </button>
            </form>
            <ul className="space-y-2">
                {tournaments.map(t => (
                    <li key={t.id} className="flex justify-between items-center p-4 bg-gray-800 rounded">
                        <span>{t.name} ({t.status})</span>
                        <div className="flex space-x-4">
                            <Link to={`/tournaments/${t.id}/manage`} className="text-green-400 hover:underline">
                                Gestionar
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TournamentPage;
