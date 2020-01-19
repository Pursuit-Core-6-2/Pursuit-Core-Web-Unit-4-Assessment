/*
JOSEPH P. PASAOA
APP MAIN Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
import React from 'react';
import { Switch, Route } from 'react-router-dom';

    // local
import './reset.css';
import './App.css';

import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import Video from './pages/Video';
import About from './pages/About';


/* COMPONENT */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/video/:id'} component={Video} />
        <Route path={'/about'} component={About} />
        <Route path={'/'} component={Homepage} />
      </Switch>
    </div>
  );
}


/* EXPORT */
export default App;
