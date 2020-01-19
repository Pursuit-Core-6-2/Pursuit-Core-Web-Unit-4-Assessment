import React from 'react';
import { Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={Home} />
    </div>
  );
}

export default App;
