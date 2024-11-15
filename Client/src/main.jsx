import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/main.min.css";
import "./assets/css/style.css";
import "./assets/css/color.css";
import "./assets/css/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
