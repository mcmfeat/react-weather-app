import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

import "./styles.css";
import "./Form.css";

import "./BackgroundImage.css";

import Heading from "./Heading";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import MoreInfos from "./MoreInfos";
import FormattedDate from "./FormattedDate";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const backgroundImages = {
    "clear-sky-day": "day-clear",
    "clear-sky-night": "night-clear",
    "few-clouds-day": "day-clear",
    "few-clouds-night": "night-clear",
    "scattered-clouds-day": "day-clouds",
    "scattered-clouds-night": "night-clouds",
    "broken-clouds-day": "day-clouds",
    "broken-clouds-night": "night-clouds",
    "shower-rain-day": "day-rain",
    "shower-rain-night": "night-rain",
    "rain-day": "day-rain",
    "rain-night": "night-rain",
    "thunderstorm-day": "storm",
    "thunderstorm-night": "storm",
    "snow-day": "snow",
    "snow-night": "snow",
    "mist-day": "mist",
    "mist-night": "mist",
  };

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      temperature: response.data.temperature.current,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "4e98dbaf0a9o9f25a430tc802924d6f0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div
        className={`containerApp ${
          weatherData.icon ? backgroundImages[weatherData.icon] : ""
        }`}
      >
        <div className="container-text">
          <div className="WeatherApp">
            <div className="Form">
              <form
                onSubmit={handleSubmit}
                className="city-choise"
                autoComplete="off"
              >
                <input
                  type="text"
                  placeholder="Choose your city"
                  onChange={handleCityChange}
                />

                <button id="search-button">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    id="search-button"
                  ></i>
                </button>
                {/*             <button id="current-loc" type="button">
              <i className="fa-solid fa-location-dot" id="current-loc"></i>
            </button> */}
              </form>
            </div>

            <Heading data={weatherData} />
            <WeatherInfo data={weatherData} />
            <Forecast data={weatherData} />
            <MoreInfos />
            <h6>
              <FormattedDate date={weatherData.date} />
            </h6>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div className="loadingContainer">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="56"
          visible={true}
        />
      </div>
    );
  }
}
