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
        <div className='login-box'>
            <div className="login-form">
                <div>
                    <h1>Log In</h1>
                    <p>Welcome back. Don’t have an account yet? <span> Sign up </span></p>
                    <form onSubmit={handleSubmit}>
                        <label for="username">Username</label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            onChange={onChange}
                            required />

                        <label for="password">Password</label>
                        <input type="password"
                            placeholder="Enter Password"
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