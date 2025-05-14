import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import axios from "axios";
import "./App.css";

const API_KEY = "f5024290666bbe3aba08d53ba881ab17";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      alert("Please enter a city name.");
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric`;

    try {
      console.log("Fetching weather from URL:", url);
      const response = await axios.get(url);
      console.log("Weather response:", response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("API error:", error.response ? error.response.data : error.message);
      alert("City not found or API error. Check the console.");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Snapshot</h1>
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
