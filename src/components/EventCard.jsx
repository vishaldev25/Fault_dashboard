const EventCard = ({ event, eventNumber }) => {
  const isFault = event.type === "FAULT"

  return (
    <div className="event-card">
      {/* Accent bar */}
      <div
        className={`event-accent ${
          isFault ? "event-accent-fault" : "event-accent-recovery"
        }`}
      />

      {/* Header */}
      <div className="event-header">
        <div
          className={`event-status ${
            isFault ? "text-red-400" : "text-green-400"
          }`}
        >
          <span className="text-2xl">
            {isFault ? "❌" : "✅"}
          </span>
          <span>{event.type}</span>

          {event.status && (
            <span
              className={`event-badge ${
                isFault
                  ? "event-badge-fault"
                  : "event-badge-recovery"
              }`}
            >
              {event.status.replace("_", " ")}
            </span>
          )}
        </div>

        <div className="event-time">
          {event.timestamp}
        </div>
      </div>

      {/* Details grid */}
      <div className="event-grid">
        <div className="event-info">
          <div className="event-info-label">Event #</div>
          <div className="event-info-value">
            {eventNumber}
          </div>
        </div>

        <div className="event-info">
          <div className="event-info-label">Switch</div>
          <div className="event-info-value">
            S{event.switchNum}
          </div>
        </div>

        <div className="event-info">
          <div className="event-info-label">Location</div>
          <div className="event-info-value">
            {event.location}
          </div>
        </div>

        <div className="event-info">
          <div className="event-info-label">Simulation Time</div>
          <div className="event-info-value">
            {event.simTime.toFixed(4)} s
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
