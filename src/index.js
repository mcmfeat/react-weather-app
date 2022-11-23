import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import WeatherApp from "./WeatherApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div className="container-app">
        <div className="container-text">
          <WeatherApp defaultCity="Coimbra"/>
        </div>
      </div>
    </div>
  </StrictMode>
);
