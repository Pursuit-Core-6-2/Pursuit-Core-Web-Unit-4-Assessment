import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src="../images/Secret-Screening-Logo.svg" alt="logo" className="Navbar-logo" />{" "}
            <Link to="/">HOME</Link>{" "}
            <Link to="/about">ABOUT</Link>{" "}
        </nav>
    )
}

export default Navbar;