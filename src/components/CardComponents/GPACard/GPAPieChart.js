import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OverallChart from "./OverallChartStyles.js";

const percentage = 98;

const PieChart = () => {
  return (
    <OverallChart>
      <CircularProgressbar
        value={percentage}
        text={`A + ${percentage}%`}

        //Dont forget to move styles into a styled components file
        styles={buildStyles({
          
          rotation: 0.0,
  
          strokeLinecap: "round",
 
          textSize: "16px",
          
          pathTransitionDuration: 0.5,

          pathColor: `rgba(32, 166, 89, ${percentage / 100})`,
          textColor: "#000",
          trailColor: "#fff",
          backgroundColor: "#3e98c7"
        })}
      />
    </OverallChart>
  );
};
export default PieChart;