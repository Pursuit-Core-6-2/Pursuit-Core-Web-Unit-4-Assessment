import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path ="/" component={Home} /> 
        <Route path="/search" component={search} />
        <Route path="/videos" component={videos} />
        <Route path="/about" component={about} />
       </Switch>
    </div>
  );
}

export default App;
