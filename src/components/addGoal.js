import React from 'react'

const AddGoal = props => {
    return (
        <div className="add-container">
            <div className="add-form">
                <div className="align">
                    <h1>Add a Goal</h1>
                    <p>
                        Create a habit or long term goal and choose what days you’d like to work towards it.
                    </p>
                    <form>
                        <label htmlFor="life-category">Life Category</label>
                        <select name="life-category">
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
                        <textarea type="textarea" name="goal" />
                        <label htmlFor="remind-me">Remind me on</label>
                        <div className="days">
                            <button name="remind-me" className="reminder">Sun</button>
                            <button name="remind-me" className="reminder">M</button>
                            <button name="remind-me" className="reminder">T</button>
                            <button name="remind-me" className="reminder">W</button>
                            <button name="remind-me" className="reminder">Th</button>
                            <button name="remind-me" className="reminder">F</button>
                            <button name="remind-me" className="reminder">Sat</button>
                        </div>

                        <button className="submit-goal">Add Goal</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddGoal;