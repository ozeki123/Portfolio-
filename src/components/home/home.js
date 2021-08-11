import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    let container = document.querySelector(".home-container")

    let height = container.clientHeight;
    document.body.style.height = height + "px"

    useEffect(() => {
        console.log(container);
        console.log(height)

        gsap.to(container, {
            y: -(height - document.documentElement.clientHeight),
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1
            }
        })
    })

    return (
        <div className="home-container">
            <div className="project-container">
                <h1>Project 1</h1>
            </div>
            <div className="project-container">
                <h1>Project 2</h1>
            </div>
            <div className="project-container">
                <h1>Project 3</h1>
            </div>
        </div>
    )
}

export default Home;
