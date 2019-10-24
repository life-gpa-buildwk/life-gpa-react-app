import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const dashboard = () => {

  return (
    <>

      <div className="dash-container">
        <section className="panels">
          <div className="panel-item">
            <h1>GPA</h1>
            <h1 className="grade">+A 98%</h1>
          </div>
          <div className="panel-item">
            <h1>Daily Progress</h1>
            <h1 className="dprog">Keep it going!</h1>
            <p>2 out of 5</p>
            <p>goals completed</p>
          </div>
          <div className="panel-item">
            <h1>Streaks</h1>
            <h1 className="dprog">0 Day Streak</h1>
            <p>Complete a 7 day streak to earn your first badge.</p>
 
          </div>
        </section>
        <section className="progress">
          <div className="progress-report">

          </div>
          <div className="todo-container">
            <div className="todo-list-header">
              <img src="" alt="" />
              <h1> Some date</h1>
              <Link to={"/addGoal"}>
                <button>+ Add Goal</button>
              </Link>
            </div>
            <div className="list">

            </div>

          </div>
        </section>
      </div>
    </>
  )

};
export default dashboard;
