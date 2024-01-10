import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li><a href='/order'>Order</a></li>
                <li><a href='/review'>Order Review</a></li>
                <li><a href='/inventory'>Manage Inventory</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </header>
    );
};

export default Header;