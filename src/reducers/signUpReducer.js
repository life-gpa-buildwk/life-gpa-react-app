import {
    CREATE,
    CREATING
} from '../actions/signupAction';

const initialState = {
    isCreated: false,
    isCreating: false
}

export const signupReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE:
            return {
                ...state,
                isCreated: true,
                isCreating: false
            };
        case CREATING:
            return {
                ...state,
                isCreating: true
            };
        default:
            return state;
    }
}