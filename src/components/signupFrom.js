import React, { useState, useEffect } from 'react';

const SignupForm = (props) => {

    const [userInfo, setUserInfo] = useState({
            userAttributes:
            {
                username: "",
                password: "",
                fullname: "",
                email: "",
                userImgUrl: ""
            }
        })

    const onChangeHandler = (e) =>{
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        // use action in signupaction js

        // if account is created push history to login page
    }
    return (
        <div className="signup-container">
            <div className="signup-form">
                <div className="align">
                    <h1>Sign Up</h1>
                    <p>Create a free account and start making the grade today.
                     Already have an account? <span> Log in</span>
                    </p>
                    <form>
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
                                onChange={onChangeHandler}/>
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

export default SignupForm