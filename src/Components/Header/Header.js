import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className="employee">
                <h3>Employee's Data</h3>
            </div>
        </div>

    );
};

export default Header;