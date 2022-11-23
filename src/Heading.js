import React from "react";

import "./Heading.css";

export default function Heading(props) {
    return (
      <div className="Heading">
        <h1>
          <div className="city">{props.data.city}</div>
          <div className="temperature">
            <img
              src={props.data.iconUrl}
              alt={props.data.icon}
              id="icon-now"
              className="float-left"
            />
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
