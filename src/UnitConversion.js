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
      <span className="tempNumber">
        {Math.round(props.celsius)}
      </span>
      <span className="scale">
        <span id="scale-celsius">
          {" "}
          ºC
        </span>
        |
        <a href="/" onClick={showFahrenheit} id="scale-farenheit">
          {" "}
          ºF
        </a>
      </span>
    </div>
  );
} else {
   let fahrenheit = (props.celsius * 9 / 5) + 32;
   return (
     <div className="UnitConversion">
       <span className="tempNumber">{Math.round(fahrenheit)}</span>
       <span className="scale">
         <a href="/" onClick={showCelsius} id="scale-celsius">
           {" "}
           ºC
         </a>
         |
         <span id="scale-farenheit">
           {" "}
           ºF
         </span>
       </span>
     </div>
   );
}
}
