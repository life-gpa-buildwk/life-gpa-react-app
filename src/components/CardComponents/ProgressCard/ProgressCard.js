import React from "react";

import Title from "../CardStyles/CardTitleStyles";
import Message from "./ProgressMessageStyles.js";

const ProgressCard = () => {
  return (
  <div className="progress-card" >
      <Title>Daily Progress</Title>
      <Message>
        Keep it Going
      </Message>
      <input
        className="card-results-counter"
        //onClick=""
        value="2 out of 5 goals complete"
      />
    </div>
  );
};
export default ProgressCard;
