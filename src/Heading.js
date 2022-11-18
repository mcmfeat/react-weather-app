import React, { useState } from "react";
import axios from "axios";

import "./Heading.css";

export default function Heading() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Heading">
        <h1>
          <div className="city">{weatherData.city}</div>
          <div className="temperature">
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear"
              id="icon-now"
              className="float-left"
            />
            <span className="temp-number" id="temp-number">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="scale">
              <a href="/" id="scale-celsius">
                {" "}
                ºC
              </a>
              |
              <a href="/" id="scale-farenheit">
                {" "}
                ºF
              </a>
            </span>
          </div>
        </h1>
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
