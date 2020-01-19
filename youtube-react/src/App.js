import React from 'react';
import {BrowserRouter,Router,Switch , Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
//import Video from './Components/Video';
import Nav from './Components/Nav';
import './App.css';


function App () {

    return(
      <div>
        <div className="App">
          <div className="navBar">
          <Nav/> 
          </div>
            <Switch>
            <Route exact path='/' component={Home}/> 
            {/* <Route path='/video/:id'component={Video}/> */}
            <Route exact path='/about'component={About}/>
            </Switch>
      </div>
    </div>
    )
    }
  


export default App;
