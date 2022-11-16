import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="city-choise" id="search-city" autocomplete="off">
        <input type="text" placeholder="Choose your city" id="choose-city" />

        <button id="search-button">
          <i className="fa-solid fa-magnifying-glass" id="search-button"></i>
        </button>
        <button id="current-loc" type="button">
          <i className="fa-solid fa-location-dot" id="current-loc"></i>
        </button>
      </form>
    </div>
  );
}
