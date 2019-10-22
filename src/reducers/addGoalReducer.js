import { ONCHANGE, ISCLICKED, SETCATEGORY } from '../actions/addGoalAction';

const initState = {
    lifeCategory: "",
    goal: "",
    days: []
}

export const addGoalReducer = (state = initState, action) => {
    switch (action.type) {
        case ONCHANGE:
            console.log(state)
            return {
                ...state,
                goal: action.goal
            }
        case SETCATEGORY:
            return {
                ...state,
                lifeCategory: action.payload
            }
        case ISCLICKED:
            return {
                ...state,
                days: [...state.days, action.payload]
            }
        default:
            return state
    }

}