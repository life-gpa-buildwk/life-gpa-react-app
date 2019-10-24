import AxiosWithAuth from '../components/Auth/axiosWithAuth';
import React from 'react'
export const LOGIN = "LOGIN";
export const FETCHING = "FETCHING";
export const ONCHANGEPASS = "ONCHANGEPASS";
export const ONCHANGEUSER = "ONCHANGEUSER";
export const HANDLESUBMIT = "HANDLESUBMIT"

export const login = ((loginInfo) => {
    return (dispatch) => {
        dispatch({ type: FETCHING });
        console.log("hi")
        new Promise(setTimeout((r) => {
            AxiosWithAuth()
                .post("https://lifegpa-zach-christy.herokuapp.com/api/login", loginInfo)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.token)
                    dispatch({ type: LOGIN, payload: res.data })
                        // push to dashboard route

                })
                .catch(err => {
                    console.log(err);
                })
        }, 1000))
    }
});

export const onChangeUser = (e) => {
    return dispatch => {
        dispatch({
            type: ONCHANGEUSER,
            [e.target.name]: e.target.value
        })
    }
}

export const onChangePass = (e) => {
    return dispatch => {
        dispatch({
            type: ONCHANGEPASS,
            [e.target.name]: e.target.value
        })
    }
}


export const onSubmit = () => {
    return dispatch => {

    }
}