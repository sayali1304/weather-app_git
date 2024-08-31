import React, { useState } from "react";
import WeatherCard from "./weather/WeatherCard";
import "./App.css";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([
    { city: "New York", temp: 22, description: "Sunny" },
    { city: "London", temp: 18, description: "Cloudy" },
    { city: "Tokyo", temp: 25, description: "Clear Sky" },
    { city: "Sydney", temp: 19, description: "Rainy" },
  ]);

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    const API_KEY = "31d90547e7b317d2a82bc0e26795b5bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    setWeather(response.data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={fetchWeather}>Get Weather</button>
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      <h1>Weather in 4 Cities</h1>
      <div className="weather-cards">
        {weatherData.map((xy, index) => (
          <WeatherCard
            key={index}
            city={city}
            country={weather?.sys?.country}
            temp={weather?.main.temp}
            description={weather?.weather[0]?.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
