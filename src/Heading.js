import React from "react";

import "./Heading.css";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function Heading(props) {
  return (
    <div className="Heading">
      <h1>
        <div className="city">{props.data.city}</div>
        <div className="temperature">
          <div className="float-left">
            <WeatherIcon icon={props.data.icon} size={46} />
          </div>

          <UnitConversion celsius={props.data.temperature} />
        </div>
      </h1>
    </div>
  );
}
