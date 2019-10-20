import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createAccount } from "../actions/signupAction";


const SignupForm = (props) => {

    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
        userImgUrl: "",
        firstName: "",
        lastName: "",
    })

    const onChangeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value

        })
    }

    useEffect(() => {
        if (props.isCreated) {
            console.log('hello');
            props.history.push('login');
        }

    }, [props.isCreated])

    const handleSubmit = (e) => {
        // use action in signupaction js
        e.preventDefault();

        const formatteduserInfo = {
            ...userInfo,
            fullname: `${userInfo.firstName} ${userInfo.lastName}`,
            username: userInfo.email
        }

        delete formatteduserInfo.firstName;
        delete formatteduserInfo.lastName;
        delete formatteduserInfo.confirmPassword;

        props.createAccount(formatteduserInfo);
    }
    return (
        <div className="signup-container">
            <div className="signup-form">
                <div className="align">
                    <h1>Sign Up</h1>
                    <p>Create a free account and start making the grade today.
                     Already have an account? <span> Log in</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <div className="first">
                                <label htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    onChange={onChangeHandler} />
                            </div>
                            <div className='last'>
                                <label htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    onChange={onChangeHandler} />
                            </div>
                        </div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" onChange={onChangeHandler} />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={onChangeHandler} />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={onChangeHandler} />
                        <button>Create an Account</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

const mapToStateProps = ({ signupReducer }) => {
    return ({
        isCreated: signupReducer.isCreated,
        isCreating: signupReducer.isCreating
    })
};

export default connect(
    mapToStateProps,
    { createAccount }
)(SignupForm)