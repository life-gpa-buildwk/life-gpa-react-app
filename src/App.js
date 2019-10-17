import React from "react";
import GPA from "./Components/CardComponents/GPACard.js";
import Progress from "./Components/CardComponents/ProgressCard.js";
import Streaks from "./Components/CardComponents/StreaksCard.js";

import "./App.css";

export default function App() {
  return (
    <div className="Desktop-Dashboard">
      <div className="App-Header" />
      <div className="App">
        <GPA />
        <Progress />
        <Streaks />
      </div>
    </div>
  );
}