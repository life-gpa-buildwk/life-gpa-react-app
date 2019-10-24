import React from "react";
import { Route } from 'react-router-dom';
import Login from "./components/login"
import LoginNav from "./components/Navs/loginNav";
import Signup from "./components/signupFrom"
import Dashboard from "./components/dashboard";
import GetStarted from "./components/letsGetStarted";
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/dash' component={Dashboard} />
      <Route excat path='/getStarted' component={GetStarted} />

      {/* insert PrivateRoute  here*/}
      <footer>
        <p> <span>LifeGPA 2019</span> | Privacy | Terms & Conditions </p>
      </footer>
    </div>
  );
}

export default App;