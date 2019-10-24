import React from "react";
import { Grid } from "semantic-ui-react";
import GPA from "./CardComponents/GPACard/GPACard.js";
import Progress from "./CardComponents/ProgressCard/ProgressCard.js";
import Streaks from "./CardComponents/StreaksCard/StreaksCard.js";
import Habit from "./HabitComponents/HabitCard.js";
import Goal from "./CardComponents/ListComponents/AddGoal";

import "../App.css";

const GridRows = () => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <GPA />
        </Grid.Column>
        <Grid.Column>
          <Progress />
        </Grid.Column>
        <Grid.Column>
          <Streaks />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Habit />
        </Grid.Column>
        <Grid.Column>
          <Goal />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default GridRows;