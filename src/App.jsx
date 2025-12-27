import Header from "./components/Header"
import Stats from "./components/Stats"
import EventList from "./components/EventList"

const App = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      <Header />
      <Stats />
      <EventList />
      
    </div>
    
  )
}

export default App
