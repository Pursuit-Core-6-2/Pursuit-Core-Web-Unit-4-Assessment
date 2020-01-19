import React from 'react';

import './App.css';
import NavBar from "./Components/NavBar";
import { Link, Route, Switch, BrowserRouter, Router } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Video from "./Components/Video"



function App() {
  return (

      <div className="App">
          <NavBar></NavBar>


          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/video/:id" component={Video}/>
          </Switch>
      </div>

  );
}

export default App;
