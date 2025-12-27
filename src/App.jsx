import Header from "./components/Header"
import Stats from "./components/Stats"
import EventList from "./components/EventList"
import { useFaultData } from "./components/useFaultData"

const App = () => {
  const { data, isOnline } = useFaultData()

  // Safe defaults when ESP is offline / data not yet received
  const events = data?.events || []
  const lastUpdate = data?.lastUpdate || "--"

  return (
    <div className="min-h-screen p-4 sm:p-6">
      <Header isOnline={isOnline} />

      <Stats
        events={events}
        lastUpdate={lastUpdate}
      />

      <EventList events={events} />

      {/* Optional connection overlay */}
      {!isOnline && (
        <div className="fixed bottom-4 right-4
                        bg-red-500/20 text-red-400
                        px-4 py-2 rounded-full
                        text-sm font-semibold">
          ESP8266 OFFLINE
        </div>
      )}
    </div>
  )
}

export default App
