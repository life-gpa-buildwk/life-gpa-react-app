import React from "react";

import Title from "../CardStyles/CardTitleStyles.js";
import Message from "../ProgressCard/ProgressMessageStyles";

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
