import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Autre from "./autre";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/> 
      <Switch>
          <Route path='/App' exact>
            <App columns={7} rows={6} />
          </Route>
        </Switch> 
        <Switch>
          <Route path='/autre' exact>
            <Autre/>
          </Route>
        </Switch> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);