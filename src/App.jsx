import Header from "./components/Header"
import Stats from "./components/Stats"
import EventList from "./components/EventList"
import { useFaultData } from "./components/useFaultData"

const App = () => {
  const data = useFaultData()

  if (!data) {
    return (
      <div>
        Connecting to ESP8266...
      </div>
    )
  }
  return (
    <div className="min-h-screen p-4 sm:p-6">
      <Header />

      <Stats
        events={data.events || []}
        lastUpdate={data.lastUpdate}
      />

      <EventList
        events={data.events || []}
      />
      
    </div>
    
  )
}

export default App
