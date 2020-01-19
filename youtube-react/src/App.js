import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Switch , Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
//import Video from './Components/Video';
import Nav from './Components/Nav';
import './App.css';


class App extends React.Component {
  constructor() { 
    super() 
    this.state = {
      id: ""
    }
  }

  render () {
    const { id } = this.state

    return(
      <div>
        <div className="navBar">
          <Nav/> 
        </div>
        <div>
          <Router>
            <Switch>
            <Route exact path='/' Component={Home}/>
            {/* <Route path='/video/:id'Component={Video}/> */}
            <Route path='/about'Component={About}/>
            </Switch>
          </Router>
      </div>
    </div>
    )
    }
  }


export default App;
