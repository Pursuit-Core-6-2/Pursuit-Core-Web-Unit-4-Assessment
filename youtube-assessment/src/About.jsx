import React from 'react';
import './About.css';
import { Switch, Route, Link} from "react-router-dom";


class About extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		};
	}




	render() {
		return(
			<div>
				<h1>About Page</h1>
				<p>This is a youtube clone app developed by Chuck Okonkwo. The rest of this text 
				is filler text just so that the app can look clean</p>
			</div>
			) ;

	}
}

export default About;