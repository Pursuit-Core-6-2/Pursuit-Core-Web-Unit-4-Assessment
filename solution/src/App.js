import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About';
import SearchFeed from './Components/SearchFeed';
import Video from './Components/Video';

function App() {
  return (
    <div className="App">
      < NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={SearchFeed} />
          <Route path="/video/:videoId" component={Video} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
