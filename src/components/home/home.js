import React, {useEffect, useRef} from 'react';
import Test from '../test/test';
import './home.scss';

const Home = () => {
    return (
        <div className="home-container">
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
