import React from 'react';
import './header.scss';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const handleOnClick = () => history.push('/about')
    return (
        <div className="header-container">
            <div className="header-contents">
                <div className="header-left">
                    <h2>andrew ozeki</h2>
                    <p>FRONT END DEVELOPER</p>
                </div>
                <div className="header-right">
                    <Link to="/">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;