"use client";

import { useEffect, useState } from 'react';
import BlueTeam from './components/BlueTeam';
import RedTeam from './components/RedTeam';

export default function Home() {
  const [teamStats, setTeamStats] = useState({
    blue: 156,
    red: 142
  });

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = Math.random() * window.innerHeight + 'px';
      particle.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval = setInterval(createParticle, 200);

    const updateStats = () => {
      setTeamStats(prev => ({
        blue: prev.blue + Math.floor(Math.random() * 3) - 1,
        red: prev.red + Math.floor(Math.random() * 3) - 1
      }));
    };
    
    const statsInterval = setInterval(updateStats, 5000);
    return () => {
      clearInterval(interval);
      clearInterval(statsInterval);
    };
  }, []);

  const total = teamStats.blue + teamStats.red;
  const bluePercent = (teamStats.blue / total) * 100;
  const redPercent = (teamStats.red / total) * 100;

  return (
    <div className="min-h-screen bg-black text-white p-2 sm:p-4 overflow-x-hidden overflow-y-auto">
      <div className="main-content">
        <header className="text-center mb-4 sm:mb-8 pt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 title-glitch">
            <span className="blue-glow">BLUE</span>
            <span className="mx-2 sm:mx-4">VS</span>
            <span className="red-glow">RED</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80">Smart Contract Security War</p>
        </header>

        <div className="battle-container max-w-7xl mx-auto relative px-2 sm:px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full">
            <BlueTeam />
            <RedTeam />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-2 sm:px-4 mb-8">
          <div className="team-stats">
            <div className="progress-flame" style={{ 
              background: `linear-gradient(to right, 
                rgba(10, 132, 255, 0.3) ${bluePercent}%, 
                rgba(255, 59, 48, 0.3) ${bluePercent}% ${redPercent + bluePercent}%
              )`
            }} />
            <span className="progress-text blue-text">{teamStats.blue} Members</span>
            <span className="progress-text red-text">{teamStats.red} Members</span>
          </div>
        </div>

        <footer className="text-center text-xs sm:text-sm opacity-60 pb-4">
          <p>Choose your side in the battle for smart contract security</p>
        </footer>
      </div>
    </div>
  );
}
