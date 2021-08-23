import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header-container">
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
    )
}

export default Header;