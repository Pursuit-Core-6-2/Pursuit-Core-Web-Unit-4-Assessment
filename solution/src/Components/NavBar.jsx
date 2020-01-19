import React, { Component } from 'react';
import SearchFeed from './SearchFeed.jsx';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            exists: true
        }
    }
    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <h1> Youtube </h1>
                    < br />
                    <BrowserRouter>
                        <Link to="/" className = "nav-link">Home</Link> {" "}
                        <Link to ="/about" className = "nav-link">About</Link> {" "}
                        <Switch>
                            <Route path="/" />
                            <Route path="/about" />
                        </Switch>
                    </BrowserRouter>
                </nav>
            </div>
        )
    }
};
export default NavBar;