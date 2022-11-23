import React, { useState } from "react";
import axios from "axios";

import "./styles.css";
import "./Form.css";

import Heading from "./Heading";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import MoreInfos from "./MoreInfos";
import FormattedDate from "./FormattedDate";
import Footer from "./Footer";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      //iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon_url}.png`,
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
      <div className="App">
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
            <button id="current-loc" type="button">
              <i className="fa-solid fa-location-dot" id="current-loc"></i>
            </button>
          </form>
        </div>

        <Heading data={weatherData} />
        <WeatherInfo data={weatherData} />
        <Forecast />
        <MoreInfos />
        <h6>
          <FormattedDate date={weatherData.date} />
        </h6>
        <Footer />
      </div>
    );
    } else {
      search();
    return "Loading...";
  }
}

