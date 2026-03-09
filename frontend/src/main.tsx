import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import TournamentPage from './pages/Tournament.tsx';
import LeaderboardPage from './pages/Leaderboard.tsx';
import ManageTournament from './pages/ManageTournament.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<TournamentPage />} />
        <Route path="/tournaments/:id/leaderboard" element={<LeaderboardPage />} />
        <Route path="/tournaments/:id/manage" element={<ManageTournament />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
