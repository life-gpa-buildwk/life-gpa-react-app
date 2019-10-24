import React, { useState, useEffect, useRef } from 'react';
import { login, isLoading } from "../actions/loginAction";
import { connect } from "react-redux";
import LoginNav from "./Navs/loginNav";
import Styled from 'styled-components';
import {
    Dimmer,
    Loader,
    Image,
    Segment
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.js'





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
        props.isLoading(true)
        event.preventDefault();
        props.login(loginInfo);
        setTimeout(() => {
            props.history.push(`/dashboard/${loginRef.current}`);
        }, 5000)
    }

    return (
        !props.isLoading1 ?
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
            :
            LoaderExampleLoader()
    )
}

const mapToStateProps = ({ loginReducer }) => {
    return ({
        isFetching: loginReducer.isFetching,
        isLoggedIn: loginReducer.isLoggedIn,
        isLoading1: loginReducer.isLoading,
        user: loginReducer.user
    })
}

export default connect(
    mapToStateProps,
    { login, isLoading }
)(Login);

const LoadingContainer = Styled.div`
    height:800px;
    background:grey !important;
    text-align: center !important;
    `
const LoaderExampleLoader = () => {
  

    return (
        <div>
            <LoadingContainer>
                <Segment>
                    <Dimmer active>
                        <Loader size='massive'>Loading</Loader>
                    </Dimmer>

                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Segment>
            </LoadingContainer>
        </div>)
}