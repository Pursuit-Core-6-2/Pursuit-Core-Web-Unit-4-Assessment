import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <div>
            <nav className="nav-bar">
                <h1 className="nav-title">Youtube</h1>
                <Link to="/" >Home</Link> {" "}
                <Link to="/about">About</Link> {" "}
            </nav>
            </div>
        )
    }
}

export default NavBar;