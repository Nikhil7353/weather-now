# 🌤️ Weather Now  

A simple React + Vite web application that lets users quickly check the **current weather conditions** for any city using the **Open-Meteo API**.  

---

## 🚀 Features  
- 🔎 Search for weather by city name  
- 🌡️ Displays current **temperature** and weather condition  
- 💨 Shows **wind speed** and direction  
- ⚠️ Error handling for invalid city or network issues  
- 📱 Responsive and user-friendly design  

---

## 🛠️ Tech Stack  
- **React (Vite)** → Frontend framework  
- **CSS** → Styling (lightweight custom styles)  
- **Open-Meteo API** → Public API for geocoding & weather data  

---

## 📂 Project Structure  
weather-now/
- ├─ src/
- │ ├─ App.jsx # Main UI & logic
- │ ├─ api.js # API helper functions
- │ ├─ main.jsx # React entry point
- │ ├─ index.css # Styles
- │ └─ ...
- ├─ index.html
- ├─ package.json
- └─ README.md


---

## ⚡ Getting Started  

### 1️⃣ Clone the repo  

_ git clone https://github.com/Nikhil7353/weather-now.git
- cd weather-now

### 2️⃣ Install dependencies
- npm install

### 3️⃣ Run development server
- npm run dev
- App will run at: [http://localhost:5173/](http://localhost:5173/)

---

## 🌍 Deployment

The app is live :[https://weather-iai2y4rh6-nikhil-chavhans-projects.vercel.app](https://weather-iai2y4rh6-nikhil-chavhans-projects.vercel.app)

---

## 📖 API Reference
- Geocoding APIhttps://geocoding-api.open-meteo.com/v1/search?name={city}
- Current Weather API:https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true

---

## 👨‍💻 Author

**Nikhil Chavhan**
- GitHub:  [@Nikhil7353](https://github.com/Nikhil7353)
