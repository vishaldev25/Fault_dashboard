import EventCard from "./EventCard"

const EventList = ({ events = [] }) => {
  if (!events || events.length === 0) {
    return (
      <div className="text-center text-slate-400 py-16">
        📊 Waiting for simulation data…
      </div>
    )
  }

  const totalEvents = events.length

  return (
    <section className="max-h-[70vh] overflow-y-auto pr-2">
      {events
        .slice()
        .reverse()
        .map((event, index) => (
          <EventCard
            key={index}
            event={event}
            eventNumber={totalEvents - index}
          />
        ))}
    </section>
  )
}

export default EventList
