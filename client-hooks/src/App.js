import React , { Component }from 'react';
import './App.css';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import About from "./About.js"
import Video from "./Video.js"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/video/:id" component={Video} />
        </Switch>
      </div>
    );
  }

}
export default App;
