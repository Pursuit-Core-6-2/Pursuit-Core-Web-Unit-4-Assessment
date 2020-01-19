import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Video from "./Components/Video";
import About from "./Components/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/video:id" component={Video} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
