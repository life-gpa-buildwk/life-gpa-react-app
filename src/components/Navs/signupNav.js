import React from 'react';
import { Link } from 'react-router-dom';

const LoginNav = () => {
    return (
        <div className="nav-container">
            <nav>
                <h1>LifeGPA</h1>
                <div className='right-nav'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Support</a>
                    <Link to={'/login'}>
                        <a>Log in</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default LoginNav;