import React from 'react';

const SignupForm = (props) => {
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
                                <input type="text" name="firstName" />
                            </div>
                            <div className='last'>
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" name="lastName" />
                            </div>
                        </div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" />
                        <button>Create an Account</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignupForm