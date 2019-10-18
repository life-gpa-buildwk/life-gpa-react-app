import React from "react";
import { Route } from 'react-router-dom';
import GPA from "./components/CardComponents/GPACard";
import Progress from "./components/CardComponents/ProgressCard.js";
import Streaks from "./components/CardComponents/StreaksCard.js";
import Login from "./components/login"
import LoginNav from "./components/Navs/loginNav";

import './styles/index.scss';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <LoginNav />
      <div className="login-container">
        <Route exact path='/login' component={Login} />
      </div>

        <footer>
          <p> <span>LifeGPA 2019</span> | Privacy | Terms & Conditions </p>
        </footer>
    </div>
  );
}

export default App;