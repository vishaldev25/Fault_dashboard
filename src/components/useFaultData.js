import { useState, useEffect } from "react"
import { dummyFaultData } from "../data/dummyFaultData"

const USE_DUMMY_DATA = false   // false → real ESP
const ESP_IP = ""

export const useFaultData = () => {
  const [data, setData] = useState(null)
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    // -----------------------------
    // Dummy data (always ONLINE)
    // -----------------------------
    if (USE_DUMMY_DATA) {
      setData(dummyFaultData)
      setIsOnline(true)
      return
    }

    // -----------------------------
    // Real ESP data
    // -----------------------------
    const timer = setInterval(() => {
      fetch(`${ESP_IP}/fault_data.json`)
        .then(res => {
          if (!res.ok) throw new Error("ESP not responding")
          return res.json()
        })
        .then(json => {
          setData(json)
          setIsOnline(true)
        })
        .catch(() => {
          setIsOnline(false)
        })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return { data, isOnline }
}
