import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Parse from "parse";

Parse.initialize(
  process.env.REACT_APP_PARSE_APPLICATION_KEY,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
