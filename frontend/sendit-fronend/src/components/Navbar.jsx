import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaShoppingCart, FaSignInAlt, FaInfoCircle, FaUserShield, FaBox } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">SendIT</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/homePage">
                        <FaHome className="navbar-icon" /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <FaSignInAlt className="navbar-icon" /> Login
                    </Link>
                </li>
                <li>
                    <Link to="/order/1">
                        <FaBox className="navbar-icon" /> Parcel Details
                    </Link>
                </li>
                <li>
                    <Link to="/admin">
                        <FaUserShield className="navbar-icon" /> Admin Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <FaInfoCircle className="navbar-icon" /> About
                    </Link>
                </li>
                <li className="navbar-cart">
                    <Link to="/cart">
                        <FaShoppingCart className="navbar-icon" /> Cart
                    </Link>
                </li>
                <li className="change-address">Change Address</li>
            </ul>
        </nav>
    );
};

export default Navbar;
