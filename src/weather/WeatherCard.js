import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ city, country, temp, description }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <h2>{country}</h2>
      <p>{temp}°C</p>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
