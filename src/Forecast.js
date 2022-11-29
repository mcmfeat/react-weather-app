import React from "react";
import WeatherIcon from "./WeatherIcon";
/* import axios from "axios"; */

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-3 icon">
            <span className="Forecast-icon">
              <WeatherIcon icon={props.data.icon} size={20} />
            </span>
          </div>
          <div className="col-sm-3 Forecast-day">Mon.</div>
          <div className="col-sm-3 Forecast-sky">Clear</div>
          <div className="col-sm-3 Forecast-tempMaxMin">30º/14º</div>
        </div>
        <hr />
{/*         <div className="row">
          <div className="col-sm-3 icon">
            <span className="material-symbols-outlined">cloudy</span>
          </div>
          <div className="col-sm-3 day">Tue.</div>
          <div className="col-sm-3 sky">Clouds</div>
          <div className="col-sm-3 tempMaxMin">33º/13º</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3 icon">
            <span className="material-symbols-outlined">sunny</span>
          </div>
          <div className="col-sm-3 day">Wed.</div>
          <div className="col-sm-3 sky">Clear</div>
          <div className="col-sm-3 tempMaxMin">38º/13º</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3 icon">
            <span className="material-symbols-outlined">air</span>
          </div>
          <div className="col-sm-3 day">Thu.</div>
          <div className="col-sm-3 sky">Windy</div>
          <div className="col-sm-3 tempMaxMin">33º/10º</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3 icon">
            <span className="material-symbols-outlined">partly_cloudy_day</span>
          </div>
          <div className="col-sm-3 day">Fri.</div>
          <div className="col-sm-3 sky">Partly cloudy</div>
          <div className="col-sm-3 tempMaxMin">33º/14º</div>
        </div> */}
      </div>
    </div>
  );
}
