import { LOGIN, FETCHING, ONCHANGEPASS, ONCHANGEUSER } from '../actions/loginAction';

const initialState = {
    isFetching: false,
    isLoggedIn: false,
    user: {},
    username: "",
    password: ""
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                isFetching: false,
                user: action.payload.user
            };
        case ONCHANGEUSER:
            return {
                ...state,
                username: action.username,
            }
        case ONCHANGEPASS:
            return {
                ...state,
                password: action.password,
            }
        case FETCHING:
            return {...state, isFetching: true };
        default:
            return state;
    }

}