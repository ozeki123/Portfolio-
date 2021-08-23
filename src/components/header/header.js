import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';

import './header.scss';


const Header = () => {
    return (
        <Router>
            <div className="header-container">
                <div className="header-contents">
                    <div className="header-left">
                        <h2>andrew ozeki</h2>
                        <p>FRONT END DEVELOPER</p>
                    </div>
                    <div className="header-right">
                        <p><Link to="/home">Home</Link></p>
                        <p><Link to="/about">About</Link></p>
                        <p><Link to="/contact">Contact</Link></p>
                    </div>
                </div>
            </div>
        </Router>
        
            
        
    )
}

export default Header;