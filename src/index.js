import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
/* import { BrowserRouter } from 'react-router-dom'; */
import App from "./App";

ReactDOM.render(
  /* <BrowserRouter> */
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  /* </BrowserRouter> */
  document.getElementById("root")
);
