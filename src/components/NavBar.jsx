/*
JOSEPH P. PASAOA
NavBar Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
import React from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';

    // local
import './NavBar.css';

import Logo from './Logo';


/* COMPONENT */
const NavBar = () => {

  return(
    <ul className="nav-bar">
      <Logo />
      <NavLink className='nav-link' to={`/`}>Home</NavLink>
      <NavLink className='nav-link' to={`/about`}>About</NavLink>
    </ul>
  );
}


/* EXPORT */
export default NavBar;
