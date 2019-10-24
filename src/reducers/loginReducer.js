import { LOGIN, FETCHING, ISLOADING } from '../actions/loginAction';

const initialState = {
    isFetching: false,
    isLoggedIn: false,
    isLoading: false,
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
        case ISLOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }

}