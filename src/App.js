import React from "react";
import { Route } from 'react-router-dom';
import GPA from "./components/CardComponents/GPACard";
import Progress from "./components/CardComponents/ProgressCard.js";
import Streaks from "./components/CardComponents/StreaksCard.js";
import Login from "./components/login"
import LoginNav from "./components/Navs/loginNav";
import Signup from "./components/signupFrom"
import AddGoal from "./components/addGoal";

import './styles/index.scss';
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <LoginNav />
      <div className="login-container">
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup'component={Signup} />
        <Route exact path='/addGoal' component={AddGoal} />
      </div>
      
      {/* insert PrivateRoute  here*/}
        <footer>
          <p> <span>LifeGPA 2019</span> | Privacy | Terms & Conditions </p>
        </footer>
    </div>
  );
}

export default App;