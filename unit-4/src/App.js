import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path ="/" component={Home} /> 
        {/* <Route path="/search" component={search} />
        <Route path="/videos" component={videos} /> */}
        <Route path="/about" component={About} />
       </Switch>
    </div>
  );
}

export default App;
