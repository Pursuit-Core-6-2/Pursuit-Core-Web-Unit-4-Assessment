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
import Videopage from './pages/Videopage';
import Aboutpage from './pages/Aboutpage';


/* COMPONENT */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route path={'/video/:id'} component={Videopage} />
        <Route path={'/about'} component={Aboutpage} />
        <Route path={'/'} component={Homepage} />
      </Switch>
    </div>
  );
}


/* EXPORT */
export default App;
