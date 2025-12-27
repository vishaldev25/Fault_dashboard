# ⚡ AFE Gate Loss Fault Monitoring Dashboard

A real-time fault monitoring system for **Active Front-End (AFE) inverter gate loss detection**, developed using **ESP8266 (NodeMCU)** and a **React + Vite + Tailwind CSS** web dashboard.

This project is implemented as part of **M.Tech (PEPS) – Stage 1**, focusing on **real-time visualization and embedded–web system integration**.

---

## 📌 Project Overview

The system detects **FAULT** and **RECOVERY** events from an inverter gate-drive simulation (or real hardware), transmits them via an **ESP8266**, and visualizes the events on a **responsive web dashboard**.

The architecture is designed to be **simple, scalable, and extensible** for future stages.

---

## 🏗️ System Architecture
Simulink / Hardware
↓
ESP8266 (NodeMCU)
↓ (HTTP JSON)
React Dashboard (Browser)


- ESP8266 acts as a REST server
- Frontend periodically fetches fault data
- No backend server required for Stage-1

---

## ✨ Features

### Embedded System (ESP8266)
- WiFi configuration using **WiFiManager**
- Real-time clock using **NTP**
- REST endpoint: `/fault_data.json`
- Event buffering (latest 100 events)
- CORS enabled for frontend access

### Web Dashboard (Frontend)
- Built with **React + Vite**
- Styled using **Tailwind CSS v4**
- Fully responsive (mobile, tablet, desktop)
- Live **ONLINE / OFFLINE** device status
- Fault & recovery event cards
- Statistics panel:
  - Last update time
  - Total events
  - Fault count
  - Recovery count
- Dummy data mode for frontend development

---

## 🧪 Development Modes

The dashboard supports two modes:

### Dummy Data Mode (Frontend Development)
```env
VITE_USE_DUMMY_DATA=true

