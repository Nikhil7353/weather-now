// src/App.jsx
import React, { useState } from "react";
import { geocode, getCurrentWeather } from "./api";



function weatherCodeToText(code) {
  // small mapping from Open-Meteo weather codes to human text
  const map = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return map[code] || "Unknown";
}

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setError("");
    setWeather(null);
    setLoading(true);

    try {
      const place = await geocode(city);
      if (!place) {
        setError("City not found. Try another name.");
        setLoading(false);
        return;
      }

      const current = await getCurrentWeather(place.latitude, place.longitude);
      if (!current) {
        setError("Weather data not available for this location.");
        setLoading(false);
        return;
      }

      setWeather({
        city: place.name,
        country: place.country,
        temperature: current.temperature,
        windspeed: current.windspeed,
        winddirection: current.winddirection,
        weathercode: current.weathercode,
        time: current.time,
      });
    } catch (err) {
      console.error(err);
      setError("Network or API error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div className="wrap">
      <div className="card">
        <h1 className="title">🌤️ Weather Now</h1>

        <div className="controls">
          <input
            type="text"
            placeholder="Enter city (e.g., Bengaluru)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={onKeyDown}
            className="input"
          />
          <button onClick={fetchWeather} className="btn" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="result">
            <h2>
              {weather.city}, {weather.country}
            </h2>
            <p className="big">{weather.temperature}°C</p>
            <p>{weatherCodeToText(weather.weathercode)}</p>
            <p>
              💨 Wind: {weather.windspeed} km/h ({Math.round(weather.winddirection)}°)
            </p>
            <p className="muted">Updated: {new Date(weather.time).toLocaleString()}</p>
          </div>
        )}

        <p className="hint">Tip: press Enter to search. Try "Bengaluru", "Mumbai", "London".</p>
      </div>
    </div>
  );
}
