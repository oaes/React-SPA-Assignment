import React from 'react';
import './Header.css';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="Header">
            <div className="Logo">
                <img src={Logo} alt="Website Logo"/>
            </div>
            <h3>ColleagueBook</h3>
        </div>
    );
};

export default Header;