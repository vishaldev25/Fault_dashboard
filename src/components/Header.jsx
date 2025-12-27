const Header = ({ isOnline }) => {
  return (
    <header className="dashboard-header">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="dashboard-title">
            ⚡ Real-Time Gate Loss Fault Dashboard
          </h1>
          <p className="dashboard-subtitle">
            AFE Gate loss fault detection & recovery monitoring
          </p>
        </div>

        <div
          className={`px-3 py-1 rounded-full text-xs font-bold
            ${isOnline
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"}
          `}
        >
          {isOnline ? "ONLINE" : "OFFLINE"}
        </div>
      </div>
    </header>
  )
}

export default Header
