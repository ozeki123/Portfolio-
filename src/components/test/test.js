import React, {useEffect, useRef} from 'react';
import './test.scss';
import StrideImage from '../../assets/images/StrideImage.jpg';
import StrideImg from '../../assets/images/stride-img.jpg'
import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin';


gsap.registerPlugin(CSSRulePlugin);

const Test = () => {
    let imageRef = useRef(null);
    let containerRef = useRef(null);

    let imageReveal = CSSRulePlugin.getRule(".project-right:after");

    let tl = gsap.timeline();

    useEffect(() => {
        console.log(imageReveal);

        tl.to(imageReveal, {
            duration: 2,
            width: "0%",
            ease: "Power2.easeOut",
            delay: 0.4,
            
        }).from(imageRef, {
            duration: 1.7,
            scale: 1.3,
            ease: "Power2.easeOut",
            delay: -2,
            opacity: 0,
        })
    })
    return (
        <div className="project-container">
            <div className="project-left">
                <div className="project-contents">
                    <h1>Stride & Co</h1>
                    <div className="sub-section">
                        <div className="rectangle"></div>
                        <div className="sub-header">
                            <p>Website built with Angular & GSAP</p>
                            <p>Visit website</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-right">
                <div className="project-image">
                    <img ref={el => imageRef = el} src={StrideImg}/>
                </div>
            </div>
        </div>

        
    )
}

export default Test