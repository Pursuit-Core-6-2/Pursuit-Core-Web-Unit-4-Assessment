import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/NavBar.css'

const NavBar = () => {
return (
    <nav>
        <span className="logo">Youtube</span>{" "}
        <Link to="/">Home </Link>{" "}
        <Link to="/about">About</Link>{" "}

    </nav>
)
}

export default NavBar;