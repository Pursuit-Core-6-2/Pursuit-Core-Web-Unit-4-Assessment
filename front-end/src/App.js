import React from 'react';
import './App.css';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from "./Components/Navbar.jsx"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Video from "./Components/Video.jsx"

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
