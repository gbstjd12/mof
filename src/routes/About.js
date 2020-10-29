import React from 'react';
import './About.css';

function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                The movie of fame.
            </span>
            <span>Hwang Yun Seong</span>
        </div>
    );
}

export default About;