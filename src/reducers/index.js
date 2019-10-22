import { combineReducers } from 'redux';
import {
    loginReducer
} from '../reducers/loginReducer'
import { signupReducer } from '../reducers/signUpReducer'
import { addGoalReducer } from '../reducers/addGoalReducer'

export default combineReducers({
    signupReducer,
    loginReducer,
    addGoalReducer
});