export default function BlueTeam() {
  return (
    <div className="team-section blue p-8 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold blue-glow mb-4">BLUE TEAM</h2>
        <p className="text-blue-400 mb-6">Defenders of Smart Contract Security</p>
        <ul className="space-y-3 text-sm mb-8">
          <li className="flex items-center space-x-2">
            <span className="text-blue-400">•</span>
            <span>Smart Contract Auditing</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-400">•</span>
            <span>Security Best Practices</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-400">•</span>
            <span>Vulnerability Assessment</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-blue-400">•</span>
            <span>Security Monitoring</span>
          </li>
        </ul>
        <button className="battle-btn px-6 py-2 bg-blue-primary hover:bg-blue-secondary transition-all duration-300 rounded cyber-border blue-team">
          Join Blue Force
        </button>
      </div>
    </div>
  );
}
