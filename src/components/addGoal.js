import React, {useState} from 'react'
import { connect } from 'react-redux';
import {onChange, setCategory, dayClick} from '../actions/addGoalAction';


const AddGoal = props => {

    const[days] = useState(["Sun", "M", "T","W", "Th", "F", "Sat"]);
    const[goalData,setGoalData] = useState({
        lifeCategory:"",
        goal:""
    });

    const onChange = (event) => {
        setGoalData({
            ...goalData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className="add-container">
            <div className="add-form">
                <div className="align">
                    <h1>Add a Goal</h1>
                    <p>
                        Create a habit or long term goal and choose what days you’d like to work towards it.
                    </p>
                    <form>
                        <label htmlFor="lifeCategory">Life Category</label>
                        <select name="lifeCategory" onClick={(e) => props.setCategory(e.target.value)}>
                            <option>Category</option>
                            <option value="health">Health</option>
                            <option value="career">Career</option>
                            <option value="social-dev">Social Development</option>
                            <option value="recreation">Recreation</option>
                            <option value="family">Family</option>
                            <option value="life-planning">Life Planning</option>
                            <option value="Sprituality">Sprituality</option>
                        </select>
                        <label htmlFor="goal">Goal</label>
                        <input type="textarea" name="goal" onChange={props.onChange} />
                        <label htmlFor="remindMe">Remind me on</label>
                        <div className="days">
                            {days.map(el => <button onClick={(e) => {
                                e.preventDefault();
                                props.dayClick(e.target.innerHTML);
                            }}
                            name="remindMe" 
                            className="reminder">{el}
                            </button> )}
                        </div>

                        <button className="submit-goal">Add Goal</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

const mapToStateProp = ({addGoalReducer}) => {
    return{
    category: addGoalReducer.lifeCategory,
    goal: addGoalReducer.goal
    }
}

export default connect(
    mapToStateProp,
    { onChange,
    setCategory,
    dayClick }
)(AddGoal);