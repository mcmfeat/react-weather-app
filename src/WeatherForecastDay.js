import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-1 icon">
          <span className="Forecast-icon">
            <WeatherIcon icon={props.data.condition.icon} size={20} />
          </span>
        </div>
        <div className="col-sm-2 Forecast-day">{day()}</div>
        <div className="col-sm-4 Forecast-sky">
          {props.data.condition.description}
        </div>
        <div className="col-sm-2 Forecast-temperatures">
          <span className="Forecast-temperature-max">{maxTemperature()}</span>
          <span className="Forecast-temperature-min">{minTemperature()}</span>
        </div>
        <div className="col-sm-2"></div>
        <hr />
      </div>
    </div>
  );
}
