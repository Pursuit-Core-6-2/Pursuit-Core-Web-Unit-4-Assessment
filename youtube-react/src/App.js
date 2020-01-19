import React from 'react';
import axios from 'axios'
import {Switch , Route} from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import './App.css';


function App()  {
  // constructor() 
  return (
    <div className="navBar">
        <Nav/> 
    </div>
    <div>
        <Search/>
    </div>
  );
}


export default App;
