import React from "react";
import GPA from "./components/CardComponents/GPACard";
import Progress from "./components/CardComponents/ProgressCard.js";
import Streaks from "./components/CardComponents/StreaksCard.js";

import './styles/index.scss';
import "./App.css";

function App(props) {
  return (
    <div className="Desktop-Dashboard">
      <div className="App-Header" />
      {/* <div className="App"> */}
        <GPA />
        <Progress />
        <Streaks />
      {/* </div> */}
    </div>

  );
}

export default App;