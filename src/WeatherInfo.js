import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function WeatherInfo() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherInfo">
        <div className="weather-info">
          <p id="weather-info">{weatherData.description}</p>
          <div className="sensation">
            Feeling<span id="feeling"> 26</span>º
            <br />
            Humidity<span id="humidity"> {weatherData.humidity}</span>%
            <br />
            Wind speed<span id="wind"> {weatherData.wind}</span> km/h
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4e98dbaf0a9o9f25a430tc802924d6f0";
    let city = "Coimbra";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
