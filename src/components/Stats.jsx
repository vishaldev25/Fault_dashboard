

const Stat = ({label, value, variant = "default"}) => {
    const colorClass =  
        variant === "fault" ? "stat-fault" : variant === "recovery" ? "stat-recovery" : "stat-default"
    
    return (
        <div className="stat-card">
            <div className="stat-label">{label}</div>
            <div className={ `stat-value ${colorClass}`}>
                {value}
            </div>
        </div>
    )
}


const Stats = ({ events = [], lastUpdate }) => {
    const totalEvents = events.length
    const faults = events.filter(e => e.type === "FAULT").length
    const recoveries = events.filter(e => e.type === "RECOVERY").length

  return (
    <section className="stats-grid">
          <Stat label="Last Update" value={lastUpdate || "--"} />
          <Stat label="Total Events" value={totalEvents} />
          <Stat label="Faults" value={faults} variant="fault" />
          <Stat label="Recoveries" value={recoveries} variant="recovery" />
          
    </section>
  )
}

export default Stats
