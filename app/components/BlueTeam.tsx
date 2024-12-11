export default function BlueTeam() {
  return (
    <div className="team-section blue p-4 sm:p-6 md:p-8 relative">
      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold blue-glow mb-2 sm:mb-4">BLUE TEAM</h2>
        <p className="text-blue-400 mb-4 sm:mb-6 text-sm sm:text-base">Defenders of Smart Contract Security</p>
        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm mb-6 sm:mb-8">
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
        <button className="battle-btn px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base bg-blue-primary hover:bg-blue-secondary transition-all duration-300 rounded cyber-border blue-team">
          Join Blue Force
        </button>
      </div>
    </div>
  );
}
