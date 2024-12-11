export default function RedTeam() {
  return (
    <div className="team-section red p-8 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold red-glow mb-4">RED TEAM</h2>
        <p className="text-red-400 mb-6">Smart Contract Vulnerability Hunters</p>
        <ul className="space-y-3 text-sm mb-8">
          <li className="flex items-center space-x-2">
            <span className="text-red-400">•</span>
            <span>Penetration Testing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-400">•</span>
            <span>Exploit Development</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-400">•</span>
            <span>Attack Vector Analysis</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-red-400">•</span>
            <span>Security Research</span>
          </li>
        </ul>
        <button className="battle-btn px-6 py-2 bg-red-primary hover:bg-red-secondary transition-all duration-300 rounded cyber-border red-team">
          Join Red Force
        </button>
      </div>
    </div>
  );
} 