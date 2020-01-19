import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Home from './Components/Home';
import Video from './Components/Video';
import About from './Components/About'

function App() {
  return (
    <div className="App">
       
      <nav className="Nav">
       
        <Link className="Link" to="/">Home</Link>
        {" "}
        <Link className="Link" to="/video">Video</Link>
        {" "}
        <Link className="Link"  to="/about">About</Link>
        </nav>
  

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/video" component={Video}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    </div>
  );
}

export default App;
