// src/api.js
// Small wrappers for the Open-Meteo geocoding and current weather endpoints.

export async function geocode(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    city
  )}&count=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding API error");
  const data = await res.json();
  if (!data.results || data.results.length === 0) return null;
  return data.results[0]; // { name, latitude, longitude, country, ... }
}

export async function getCurrentWeather(latitude, longitude) {
  // request current weather, temperature in Celsius and wind in km/h
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather API error");
  const data = await res.json();
  return data.current_weather || null;
}
