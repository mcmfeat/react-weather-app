import React from "react";
/* import axios from "axios"; */

import "./Heading.css";

export default function Heading() {
  return (
    <div className="Heading">
      <h1>
        <div className="city">Coimbra</div>
        <div className="temperature">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="Clear"
            id="icon-now"
            className="float-left"
          />
          <span className="temp-number" id="temp-number">
            28
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
