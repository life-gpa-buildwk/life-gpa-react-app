import React from "react";
import { Route } from 'react-router-dom';
import Login from "./components/login"
import LoginNav from "./components/Navs/loginNav";
import Signup from "./components/signupFrom"
import Dashboard from "./components/dashboard";
import GetStarted from "./components/letsGetStarted";
import { BrowserRouter } from 'react-router-dom';
import PrivateRoute from "./components/Auth/privateRoute"

import './styles/index.scss';
import "./App.css";

function App(props) {
  return (
    <div className="App">
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup'component={Signup} />
        <Route exact path='/dash' component={Dashboard} />
        <Route exact path='/getStarted' component={GetStarted} />
        P
      {/* insert PrivateRoute  here*/}
        {/* <PrivateRoute exact path='/dashboard/:id' component={Dashboard} /> */}
        <footer>
          <p> <span>LifeGPA 2019</span> | Privacy | Terms & Conditions </p>
        </footer>
    </div>
  );
}

export default App;