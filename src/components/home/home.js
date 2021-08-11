import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    

    

    useEffect(() => {
        let container = document.querySelector(".home-contents");
        let height = container.clientHeight;
        document.body.style.height = height + "px";
        console.log(container);
        console.log(container.clientHeight)

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
            <div className="home-contents">
                <div className="header">
                    <div className="header-contents">
                        <div className="header-left">
                            <h2>andrew ozeki</h2>
                            <p>FRONT END DEVELOPER</p>
                        </div>
                        <div className="header-right">
                            <p>Work</p>
                            <p>About</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
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
           
        </div>
    )
}

export default Home;
