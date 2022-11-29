import React from "react";

import ".BackgroundImage.css";

export default function BackgroundImage(props) {
  const backgroundImages = {
    "clear-sky-day": "day-clear",
    "clear-sky-night": "night-clear",
    "few-clouds-day": "day-clear",
    "few-clouds-night": "night-clear",
    "scattered-clouds-day": "day-clouds",
    "scattered-clouds-night": "night-clouds",
    "broken-clouds-day": "day-clouds",
    "broken-clouds-night": "night-clouds",
    "shower-rain-day": "day-rain",
    "shower-rain-night": "night-rain",
    "rain-day": "day-rain",
    "rain-night": "night-rain",
    "thunderstorm-day": "storm",
    "thunderstorm-night": "storm",
    "snow-day": "snow",
    "snow-night": "snow",
    "mist-day": "mist",
    "mist-night": "mist",
  };

  return (
    <div
      className= "containerApp" style={
        background-image: `url(../images/${
          backgroundImages[props.icon]
        }.jpg);`,
      }
    >

    </div>
  );
}
