import React from 'react';

const LetsGetStarted = (props) => {
    return (
        <div className="get-started-container">
            <div className="get-started-form">
                <div className="align">
                    <h1>Let’s get started</h1>
                    <section className='p2'>
                    <p>Thank you for signing up with your free account!</p>
                    <p>LifeGPA calculates how well you’re achieving your life goals by averaging how often you work towards them.</p>
                    </section>
                    <section className="key-points">
                        <ol>
                            <li> <span> 1.)</span> Create a goal and choose what area of life it impacts.</li>
                            <li><span>2.)</span> Choose what days of the week you’d like to work on it.</li>
                            <li><span>3.)</span> Check off what goals you were able to work towards for the day.</li>
                        </ol>
                    </section>
                    <section className="before">
                        <p>Before we begin, when would you like an update on your progress?</p>
                    </section>

                    <div className="center">
                    <button className="report-option">30 Days</button>
                    <button className="report-option">60 Days</button>
                    <button className="report-option">90 Days </button>
                    
                    </div>
                    <div className="center-button">
                        <button className='to-dash'> Go to Dashboard</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LetsGetStarted;