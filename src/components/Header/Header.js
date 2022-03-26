import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/order">order</a>
                <a href="/review">order review</a>
                <a href="/inventory">inventory management</a>
            </div>
        </nav>
    );
};

export default Header;