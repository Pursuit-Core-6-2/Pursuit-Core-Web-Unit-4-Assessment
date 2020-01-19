import React, { Component } from 'react';
import SearchFeed from './SearchFeed.jsx';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            exists: true
        }
    }
    render() {
        return (
            <div className="nav-bar">
                <nav>
                    <BrowserRouter>
                        <Link to="/feed">Feed</Link>
                        <Switch>
                            <Route path="feed" render={SearchFeed} />
                        </Switch>
                    </BrowserRouter>
                </nav>
            </div>
        )
    }
};
export default NavBar;