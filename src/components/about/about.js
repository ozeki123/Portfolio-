import React from 'react'
import './about.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    return (
        <div className="about-container">
            <div className="home-contents">
                <div className="about-section">
                    <h1>About works!</h1>
                </div>
                <div className="about-section">
                    <h1>About works!</h1>
                </div>
            </div>
            
        </div>        

    )
}

export default About;