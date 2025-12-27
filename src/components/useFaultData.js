import { useState, useEffect } from "react"
import { dummyFaultData } from "../data/dummyFaultData"

// 🔁 DEVELOPMENT SWITCH
const USE_DUMMY_DATA = true   // false → ESP8266 real data

const ESP_IP = "http://192.168.1.50"  // ESP IP

export const useFaultData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // -----------------------------
    // Dummy data (development)
    // -----------------------------
    if (USE_DUMMY_DATA) {
      setData(dummyFaultData)
      return
    }

    // -----------------------------
    // Real ESP8266 data
    // -----------------------------
    const timer = setInterval(() => {
      fetch(`${ESP_IP}/fault_data.json`)
        .then(res => res.json())
        .then(setData)
        .catch(() => {})
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return data
}
