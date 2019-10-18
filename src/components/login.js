import React, { useState, useEffect } from 'react';

const Login = props => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    }
    );


    const onChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        // use action from loginActions.js to login 
        //something like login(loginInfo)

        // if is logged in then
            //push props.history(/dashboard)
    }

    return (
        <div className='login-box'>
            <div className="login-form">
                <div>
                    <h1>Log In</h1>
                    <p>Welcome back. Don’t have an account yet? <span> Sign up </span></p>
                    <form onSubmit={handleSubmit}>
                        <label for="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={onChange}
                            required />

                        <label for="password">Password</label>
                        <input type="password"
                            name="password"
                            onChange={onChange}
                            required />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login;