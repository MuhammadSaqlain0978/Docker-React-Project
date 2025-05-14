import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>🌡️ Temperature: {weather.main.temp} °C</p>
      <p>☁️ Condition: {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
