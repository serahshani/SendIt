// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">SendIT</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/order/1">Parcel Details</Link> {/* Example link */}
                </li>
                <li>
                    <Link to="/order">Create Order</Link> {/* Example link */}
                </li>
                <li>
                    <Link to="/admin">Admin Dashboard</Link> {/* Example link */}
                </li>
                <li>
                    <Link to="/about">About </Link> {/* Example link */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;