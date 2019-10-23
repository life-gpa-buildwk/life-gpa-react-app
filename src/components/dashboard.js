import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const dashboard = () => {
  return (
    <>

      <div className="dash-container">
        <section className="panels">
          <div className="panel-item"></div>
          <div className="panel-item"></div>
          <div className="panel-item"></div>
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
