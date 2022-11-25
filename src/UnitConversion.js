import React, { useState } from "react";

import "./Heading.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="tempNumber">{Math.round(props.celsius)}</span>
        <span className="scale">
          <span className="scaleCelsius"> ºC</span>|
          <a href="/" onClick={showFahrenheit} className="scaleFarenheit">
            {" "}
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="UnitConversion">
        <span className="tempNumber">{Math.round(fahrenheit)}</span>
        <span className="scale">
          <a href="/" onClick={showCelsius} className="scaleCelsius">
            {" "}
            ºC
          </a>
          |<span className="scaleFarenheit"> ºF</span>
        </span>
      </div>
    );
  }
}
