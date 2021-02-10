import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";


ReactDOM.render(
  <App columns={7} rows={6} />, 
  document.getElementById("root")
);