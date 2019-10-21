import { combineReducers } from 'redux';
import {
    loginReducer
} from '../reducers/loginReducer'
import { signupReducer } from '../reducers/signUpReducer'

export default combineReducers({
    signupReducer,
    loginReducer
});