import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav, Form, Button, FormControl  } from 'react-bootstrap'

const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><Link style={{color: 'white', textDecoration: 'none'}} to='/'>YouTube</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link><Link style={{color: 'white'}} to="/">Home</Link></Nav.Link>
                <Nav.Link><Link style={{color: 'white'}} to="/about">About</Link></Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar