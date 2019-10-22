export const ISCLICKED = "ISCLICKED";
export const ONCHANGE = "ONCHANGE";
export const ONSUBMIT = "ONSUBMIT";
export const SETCATEGORY = "SETCATEGORY";

export const dayClick = (day) => {
    return dispatch => {
        dispatch({type:ISCLICKED, payload:day});
    }
}

export const onChange = (e) => {
    console.log("hello");
    return dispatch => {
        dispatch({type:ONCHANGE, 
                [e.target.name]: e.target.value
        })
    }
}

export const setCategory = (value) => {
    return dispatch => {
        dispatch({type:SETCATEGORY, payload:value});
    }
}

