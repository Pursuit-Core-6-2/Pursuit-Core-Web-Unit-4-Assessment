import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
   return  (
      <nav>
         <span className="bar"></span>{" "}
         <Link to='/about'>About</Link>{" "}
         <Link to='/home'>Home</Link>{" "}
      </nav>
   )
}

export default Nav;