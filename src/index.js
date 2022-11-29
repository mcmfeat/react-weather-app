import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import WeatherApp from "./WeatherApp";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">

          <WeatherApp defaultCity="Coimbra" />

      <Footer />
    </div>
  </StrictMode>
);
