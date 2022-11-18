import React from "react";

import "./styles.css";
import "./Form.css";

import Heading from "./Heading";
import Date from "./Date";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import MoreInfos from "./MoreInfos";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="App">
      <div className="Form">
        <form className="city-choise" id="search-city" autoComplete="off">
          <input type="text" placeholder="Choose your city" id="choose-city" />

          <button id="search-button">
            <i className="fa-solid fa-magnifying-glass" id="search-button"></i>
          </button>
          <button id="current-loc" type="button">
            <i className="fa-solid fa-location-dot" id="current-loc"></i>
          </button>
        </form>
      </div>
      <Heading />
      <Date />
      <WeatherInfo />
      <Forecast />
      <MoreInfos />
      <Footer />
    </div>
  );
}
