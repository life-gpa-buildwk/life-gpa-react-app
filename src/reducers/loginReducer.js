import { LOGIN, FETCHING } from '../actions/loginAction';

const initialState = {
    isFetching: false,
    isLoggedIn: false,
    user: {}
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
        case FETCHING:
            return {...state, isFetching: true };
        default:
            return state;
    }

}