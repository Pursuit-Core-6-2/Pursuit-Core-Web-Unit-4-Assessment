import React from 'react';
import './Navbar.css';
import { Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Video from './Video';


const Navbar = (props) => {

	return (
		<div>
			<nav className ='navbar'>
				<div className='flex2'>
					<b>Youtube</b>
				</div>
				<div className='flex1'>
					<Link className='nav' to='/home'>Home</Link>
				</div>
				<div className='flex1'>
					<Link className='nav' to='/about'>About</Link>
				</div>
			</nav>
			<Switch>
					<Route path="/about" component={About} />
					<Route path='/video/:id' component={Video} />	
					<Route path="/" component={Home} />		
			 </Switch>
		</div>


		);

}

export default Navbar;