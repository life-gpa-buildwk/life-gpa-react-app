import { LOGIN, FETCHING }from '../actions/loginAction'
const initialState = {
    isFetching: false,
    isLoggedIn: false
}

export const UserLoginConstants = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {...state, isLoggedIn = true, isFetching = false};
        case FETCHING:
            return {...state, isFetching = true};
    }
}