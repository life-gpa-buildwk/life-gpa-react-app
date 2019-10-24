import React, { useState, useEffect } from 'react';
import { login, onChangeUser, onChangePass, onSubmit } from "../actions/loginAction";
import { connect } from "react-redux";
import LoginNav from "./Navs/loginNav";


const Login = props => {



    const handleSubmit = (event) => {
        event.preventDefault();
        props.login({
            username: props.username,
            password: props.password
        })
        .then(res => props.history.push(`/dashboard/${props.user.id}`));

        
            // if (props.) {
            //     props.history.push(`/dashboard/${props.user.id}`);
            // }
        



    }

    return (
        <>
            <LoginNav />

            <div className="login-container">

                <div className='login-box'>

                    <div className="login-form">
                        <div>
                            <h1>Log In</h1>
                            <p>Welcome back. Don’t have an account yet? <span> Sign up </span></p>
                            <form onSubmit={handleSubmit}>
                                <label htmlfor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={props.onChangeUser}
                                    required />

                                <label htmlfor="password">Password</label>
                                <input type="password"
                                    name="password"
                                    onChange={props.onChangePass}
                                    required />

                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

const mapToStateProps = ({ loginReducer }) => {
    return ({
        isFetching: loginReducer.isFetching,
        isLoggedIn: loginReducer.isLoggedIn,
        user: loginReducer.user,
        username: loginReducer.username,
        password: loginReducer.password
    })
}

export default connect(
    mapToStateProps,
    {
        login,
        onChangeUser,
        onChangePass,
        onSubmit
    }
)(Login);