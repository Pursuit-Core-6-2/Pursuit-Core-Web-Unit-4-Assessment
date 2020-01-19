import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import SearchFeed from './SearchFeed';
import Video from './Video'

class NavBar extends Component {
    render() {
        return (
            <>
            <nav className="nav-bar">
                <h1 className="nav-title">Youtube</h1>
                <Link to="/" >Home</Link> {" "}
                <Link to="/about">About</Link> {" "}
            </nav>
            <div>
                <Switch>
                    <Route exact path="/" component={SearchFeed} />
                    <Route path="/about" component={About} />
                    <Route path="/video/:videoId" component={Video} />
                </Switch>
            </div>
            </>
        )
    }
}

export default NavBar;