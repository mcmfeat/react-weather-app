import React from "react";

import "./Heading.css";
import WeatherIcon from "./WeatherIcon";

export default function Heading(props) {
    return (
      <div className="Heading">
        <h1>
          <div className="city">{props.data.city}</div>
          <div className="temperature">
            <div className="float-left">
              <WeatherIcon
                icon={props.data.icon}
                  size={46}
              />
            </div>
            <span className="temp-number" id="temp-number">
              {Math.round(props.data.temperature)}
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
}
