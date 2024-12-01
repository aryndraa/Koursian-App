// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./solar.css";


const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
