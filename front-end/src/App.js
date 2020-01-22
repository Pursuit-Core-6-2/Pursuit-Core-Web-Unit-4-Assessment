import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
// import Video from './Components/VideoDetail';
import About from './Components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;