import React from "react";

import "./styles.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p className="weatherDescription">{props.data.description}</p>
      <div className="sensation">
        Feeling<span id="feeling"> 26</span>º
        <br />
        Humidity<span id="humidity"> {props.data.humidity}</span>%
        <br />
        Wind speed
        <span id="wind"> {Math.round(props.data.wind)}</span> km/h
      </div>
    </div>
  );
}
