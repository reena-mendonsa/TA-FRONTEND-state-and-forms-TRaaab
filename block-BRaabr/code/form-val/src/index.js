import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Multiple from "./components/Multiple";
import "./stylesheet/style.css";

ReactDOM.render(
  <React.Fragment>
    <App />
    <Multiple />
  </React.Fragment>,
  document.getElementById("root")
);
