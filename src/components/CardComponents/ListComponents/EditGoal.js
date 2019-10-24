//import the necessary files
import React from "react";
import {
  Modal,
  ControlLabel,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

//create a class for displaying the modal for editing an existing goal and export it
export class EditGoal extends React.Component {
  constructor(props) {
    //create a state to handle the goal to be edited
    super(props);
    this.state = { name: "", categories: "" };
    this.handleGoalNameChange = this.handleGoalNameChange.bind(this);
    this.handleGoalCategoriesChange = this.handleGoalCategoriesChange.bind(
      this
    );
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    //make the goal prop a state
    const prevName = state.prevName;
    const prevCategories = state.prevCategories;
    const name = prevName !== props.goal.name ? props.goal.name : state.name;
    const categories =
      prevCategories !== props.goal.categories.join(",")
        ? props.goal.categories.join(",")
        : state.categories;
    return {
      prevName: props.goal.name,
      name,
      prevCategories: props.goal.categories.join(","),
      categories
    };
  }
  handleGoalNameChange(e) {
    //change the name to reflect user input
    this.setState({ name: e.target.value });
  }
  handleGoalCategoriesChange(e) {
    //change the categories to reflect user input
    this.setState({ categories: e.target.value });
  }
  handleEdit(e) {
    //get the goal data, manipulate it and call the function for editing an existing goal
    e.preventDefault();
    const onEdit = this.props.onEdit;
    const currentlyEditing = this.props.currentlyEditing;
    const regExp = /\s*,\s*/;
    var name = this.state.name;
    var categories = this.state.categories.split(regExp);
    onEdit(name, categories, currentlyEditing);
  }
  handleCancel() {
    const onEditModal = this.props.onEditModal;
    this.setState({
      name: this.props.goal.name,
      categories: this.props.goal.categories.join(",")
    });
    onEditModal();
  }
  render() {
    const onShow = this.props.onShow;
    var regex1 = /^\S/;
    var regex2 = /^[^,\s]/;
    var regex3 = /[^,\s]$/;
    const validGoal =
      regex1.test(this.state.name) &&
      regex2.test(this.state.categories) &&
      regex3.test(this.state.categories);
    return (
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormGroup controlId="formControlsName">
            <ControlLabel>Goal Name</ControlLabel>
            <FormControl
              type="text"
              required
              onChange={this.handleGoalNameChange}
              value={this.state.name}
              placeholder="Enter Name"
            />
          </FormGroup>
          <FormGroup controlId="formControlsCategories">
            <ControlLabel>Goal Categories</ControlLabel>
            <FormControl
              componentClass="textarea"
              type="text"
              required
              onChange={this.handleGoalcategoriesChange}
              value={this.state.categories}
              placeholder="Enter Categoriess(separate by commas)"
            />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            disabled={!validGoal}
            bsStyle="success"
            onClick={this.handleEdit}
          >
            Save Goal
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditGoal;