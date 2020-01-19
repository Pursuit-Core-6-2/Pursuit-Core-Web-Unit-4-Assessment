import React from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const items = [
    { key: 'home', active: true, name: 'Home' },
    { key: 'about', name: 'About' },
    { items: 'icon', name: 'wrench' }
]

const MenuExampleBasic = (props) => {
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    return (
        <Menu>
            <Link to="/">
                <Menu.Item
                    name='home'
                    active={props.activeItem === 'home'}
                    onClick={(e, name) => props.handleClick(e, 'home')}
                >
                    Home
                </Menu.Item>
            </Link>

            <Link to="/about">
                <Menu.Item
                    name='about'
                    active={props.activeItem === 'about'}
                    onClick={(e, name) => props.handleClick(e, 'about')}
                >
                    About
                </Menu.Item>
            </Link>
        </Menu>
    )
}


export default MenuExampleBasic