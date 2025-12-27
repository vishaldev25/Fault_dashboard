export const dummyFaultData = {
  lastUpdate: "2025-01-15 14:32:10",
  events: [
    {
      type: "FAULT",
      switchNum: 3,
      location: "Phase B Upper",
      simTime: 0.0035,
      timestamp: "2025-01-15 14:31:58",
      status: "OPEN_CIRCUIT"
    },
    {
      type: "RECOVERY",
      switchNum: 3,
      location: "Phase B Upper",
      simTime: 0.0124,
      timestamp: "2025-01-15 14:32:05",
      status: "RECONNECTED"
    },
    {
      type: "FAULT",
      switchNum: 1,
      location: "Phase A Upper",
      simTime: 0.0218,
      timestamp: "2025-01-15 14:32:10",
      status: "OPEN_CIRCUIT"
    }
  ]
}
