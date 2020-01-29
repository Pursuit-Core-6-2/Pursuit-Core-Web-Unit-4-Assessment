import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'


const NavBar = () => {
    return (
    <div className>
        <nav>
            <h4>Youtube</h4>
            {/* <span>Click link to go to page</span> */}
            <Link to='/'>Home</Link>{'   '}
            <Link to='/about'>About</Link>{'   '}
            {/* <Link to='/video'>Video</Link>{'   '} */}
        </nav>
    </div>
    )
    
} 


export default NavBar