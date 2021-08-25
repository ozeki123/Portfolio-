import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Test from '../test/test';
import Header from '../header/header';

import './home.scss';
import StrideImage from '../../assets/images/StrideImage.jpg'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    
    let imageRef = useRef(null);
    let containerRef = useRef(null);
    
    let tl = gsap.timeline();
    
    useEffect(() => {

        let container = document.querySelector(".home-contents");
        let height = container.clientHeight;
        document.body.style.height = height + "px";
        // console.log(container);
        // console.log(container.clientHeight);
        // console.log(imageRef.current);
        

        // tl.to(container, {
        //     y: -(height - document.documentElement.clientHeight),
        //     scrollTrigger: {
        //         trigger: document.body,
        //         start: "top top",
        //         end: "bottom bottom",
        //         scrub: 1
        //     }
        // })

        tl.to(containerRef.current, {
            duration: 0.1,
            css: { visibility: "visible" }
        })
        
    })

    return (
        <div className="home-container" ref={containerRef}>
            <div className="home-contents">
                <div className="banner">
                    <div className="project-container">
                        <Test/>
                    </div>
                    <div className="project-container">
                        <Test/>
                    </div>
                    <div className="project-container">
                        <Test/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
