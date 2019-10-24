import React from "react";
import {
  PanelGroup,
  Panel,
  Button,
  ButtonToolbar,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import "./todostyles.css";

import { AddGoal } from "./AddGoal.js";
import { EditGoal } from "./EditGoal.js";

/*import './css/index.css';*/
//create the main class for displaying the goals
class GoalSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        goals: [],
        showAdd: false,
        showEdit: false,
        currentlyEditing: 0
    };
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.editGoal = this.editGoal.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
  }
  componentDidMount() {
    var goals = (typeof localStorage["goals"] !== undefined) ? JSON.parse(localStorage.getItem("goals")) :[
        {
          name: "Complete today's Counch to 5k program.",
          categories: ["Life Planning"]
        },
        {
          name: "Meditate for 15 minutes.",
          categories: ["Health"]
        },
        {
          name: "Read for 30 minutes",
          categories: ["Personal Developement"]
        }
      ];
      this.setState({goals: goals});
    }
    showAddModal() {//show the new goal modal
        this.setState({showAdd: !this.state.showAdd});
      }
      showEditModal(index) {//show the edit goal modal
        this.setState({currentlyEditing: index, showEdit: !this.state.showEdit});
      }
      addGoal(goal) {//create a new goal
        let goals = this.state.goals;
        goals.push(goal);
        localStorage.setItem('goals', JSON.stringify(goals));
        this.setState({goals: goals});
        this.showAddModal();
      }
      editGoal(newName, newCategories, currentlyEditing) {//edit an existing goal
        let goals = this.state.goals;
        goals[currentlyEditing] = {name: newName, categories: newCategories};
        localStorage.setItem('goals', JSON.stringify(goals));
        this.setState({goals: goals});
        this.showEditModal(currentlyEditing);
      }
      deleteGoal(index) {//delete an existing goal
        let goals = this.state.goals.slice();
        goals.splice(index, 1);
        localStorage.setItem('goals', JSON.stringify(goals));
        this.setState({goals: goals, currentlyEditing: 0});
      }
  
  render() {
    const goals = this.state.goals;
    var currentlyEditing = this.state.currentlyEditing;
    return (
      <div className="jumbotron">
        <Button
          className="goal-button"
          bsStyle="primary"
          onClick={this.showAddModal}
        >
          + Add Goal
        </Button>
        <AddGoal
          onShow={this.state.showAdd}
          onAdd={this.addGoal}
          onAddModal={this.showAddModal}
        />
        <PanelGroup accordion id="goals">
          {goals.map((goal, index) => (
            <Panel eventKey={index} key={index}>
              <Panel.Heading>
                <Panel.Title className="title" toggle>
                  {goal.name}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <ListGroup>
                  {goal.categories.map((category, index) => (
                    <ListGroupItem key={index}>{category}</ListGroupItem>
                  ))}
                </ListGroup>
                <ButtonToolbar>
                  <Button bsStyle="warning" onClick={() => {this.showEditModal(index)}}>Edit</Button>
                  <Button bsStyle="danger" onClick={() => {this.deleteGoal(index)}}>Delete</Button>
                </ButtonToolbar>
              </Panel.Body>
              <EditGoal onShow={this.state.showEdit} onEdit={this.editGoal} onEditModal={() => {this.showEditModal(currentlyEditing)}} currentlyEditing={currentlyEditing} goal={goals[currentlyEditing]} />
            </Panel>
          ))}
        </PanelGroup>
      </div>
    );
  }
}

export default GoalSection;