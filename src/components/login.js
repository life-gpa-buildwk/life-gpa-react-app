import React, { useState, useEffect } from 'react';
import {AxiosWithAuth} from './axiosWithAuth';

const Login = props => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    }
    );


    const onChange = (event) => {
        setLoginInfo({...loginInfo,[event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        // console.log(loginInfo);
        // event.preventDefault();
        // AxiosWithAuth()
        // .post('/login',loginInfo)
        // .then(res => {
        //     localStorage.setItem('token', res.data.payload);
        //     props.history.push('friendsList');
        // })
        // .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label for="username"><b>Username</b></label>
            <input
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={onChange}
                required />

            <label for="password"><b>Password</b></label>
            <input type="password"
                placeholder="Enter Password"
                name="password"
                onChange={onChange}
                required />

            <button type="submit">Login</button>
        </form>
    )
}


export default Login;