import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navBar">
            <h1 className = "youtube">Youtube</h1>
            <Link to="/" className="links" >Home</Link> {" "}
            <Link to="/about/" className="links" >About</Link>{" "}
        </div>
    );
}

export default Navbar;
