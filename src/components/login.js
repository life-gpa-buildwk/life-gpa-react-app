import React, { useState, useEffect, useRef } from 'react';
import { login } from "../actions/loginAction";
import { connect } from "react-redux";
import LoginNav from "./Navs/loginNav";


const Login = props => {

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    }
    );

    let loginRef = useRef(props.user.id);
    loginRef.current = props.user.id;


    const onChange = (event) => {
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(loginInfo);
        setTimeout(()=>{
            props.history.push(`/dashboard/${loginRef.current}`);
        },3000)
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
                                    onChange={onChange}
                                    required />

                                <label htmlfor="password">Password</label>
                                <input type="password"
                                    name="password"
                                    onChange={onChange}
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
        user: loginReducer.user
    })
}

export default connect(
    mapToStateProps,
    { login }
)(Login);