import React from 'react';
import { Link, Browser, Switch, } from 'react-router-dom';
import Home from './Home'
import About from './About'

const Nav = () => {
   return  (
      <nav>
         <Link to='/about'>About</Link>
         <Link to='/'>Home</Link>
      </nav>
   )
}

export default Nav;