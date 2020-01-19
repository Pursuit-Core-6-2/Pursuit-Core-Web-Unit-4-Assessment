import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from "./Home";
import About from "./About";




const NavBar = () => {
    return (
        <nav>
            <strong><p>YouTube</p></strong>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
        </nav>
    )
}

export default NavBar;