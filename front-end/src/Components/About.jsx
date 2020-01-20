import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'


class About extends React.Component {
    render() {
        return (
            <div className="Home">
                <h1>About</h1>
                <p> Youtube is  an app where you can search for videos, click on the video to watch and make comments.</p>
            </div>
        );
    }
}

export default About;