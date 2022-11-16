import React from "react";

import "./styles.css";

import Form from "./Form";
import Heading from "./Heading";
import Date from "./Date";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import MoreInfos from "./MoreInfos";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="App">
      <Form />
      <Heading />
      <Date />
      <WeatherInfo />
      <Forecast />
      <MoreInfos />
      <Footer />
    </div>
  );
}
