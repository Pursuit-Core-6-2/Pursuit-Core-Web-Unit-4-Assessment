import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src={require("./Secret-Screening-Logo.png")} alt="logo" className="Navbar-logo" />{" "}
            <Link to="/" className="Navbar-link">HOME</Link>{" "}
            <Link to="/about" className="Navbar-link">ABOUT</Link>{" "}
        </nav>
    )
}

export default Navbar;