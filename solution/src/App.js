import React from 'react';
import './App.css';
import SearchFeed from './Components/SearchFeed';
import { Link, Route, Switch } from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <nav className = "nav-bar">
        <h1 className="nav-title">Youtube</h1>
        <Link to="/" >Home</Link> {" "}
        <Link to="/about">About</Link> {" "}
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={SearchFeed} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
