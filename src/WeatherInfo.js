import React from "react";
/* import axios from "axios"; */

import "./styles.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="weather-info">
        <p id="weather-info">Clouds</p>
        <div className="sensation">
          Feeling<span id="feeling"> 26</span>º
          <br />
          Humidity<span id="humidity"> 61</span>%
          <br />
          Wind speed<span id="wind"> 2</span> km/h
        </div>
      </div>
    </div>
  );
}
