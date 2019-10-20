import { combineReducers } from 'redux';
import {
    userLoginConstants
} from '../reducers/loginReducer'
import {createAccount} from '../reducers/signUpReducer'

export default combineReducers({
    createAccount,
    userLoginConstants
});