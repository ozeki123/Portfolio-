import React, {useEffect, useRef} from 'react';
import './test.scss';
import StrideImage from '../../assets/images/StrideImage.jpg';
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
            duration: 1.7,
            width: "0%",
            ease: "Power2.easeOut",
            delay: 1,
        }).from(imageRef, {
            duration: 1.7,
            scale: 1.3,
            ease: "Power2.easeOut",
            delay: -2
        })
    })
    return (
        <div className="project-container">
            <div className="project-right">
                <div className="project-image">
                    <img ref={el => imageRef = el} src={StrideImage}/>
                </div>
            </div>
        </div>

        
    )
}

export default Test