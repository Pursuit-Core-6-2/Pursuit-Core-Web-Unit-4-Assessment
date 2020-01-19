import React from 'react';
import './Home.css';
import { Switch, Route, Link} from "react-router-dom";
import API_KEY from './secret';
import axios from 'axios';
import Video from './Video';


class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			results: undefined
		};
	}

	handleTextEntry = (e) => {
		this.setState({
			searchQuery: e.target.value
		});
	}

	handleFormSubmit = async (e) => {

		e.preventDefault();
		let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${this.state.searchQuery}&key=AIzaSyAFiPDILpEEiAgseAVth0fSyMaydvsrQpo`);
		console.log(response);
		let resultsArr = [];
		for(let i = 0; i < response.data.items.length; i++){
			let temp = {title: response.data.items[i].snippet.description, thumbnail: response.data.items[i].snippet.thumbnails.high.url, videoId: response.data.items[i].id.videoId};
			resultsArr.push(temp);
		}
		this.setState({
			results: resultsArr
		});
		console.log(resultsArr);
	}




	render() {
		let results =  <div className='centeredText'>No Search for videos above!</div>;
		if(this.state.results){
			results = this.state.results.map((elem) => {
				return(
					<div className= 'resultsItem'>
						<Link to={`/video/${elem.videoId}`}>
							<img src={elem.thumbnail} alt='image of search result' />
							<h4>{elem.title}</h4>
						</Link>
					</div>
					);
			});
		}

		
		return(
			<div>
				<form onSubmit = {this.handleFormSubmit}>
					<input type='text' onChange ={this.handleTextEntry} placeholder='Search'/>
					<button className ='myButton'type='submit'>Search</button>
				</form>
				<div className='resultsDiv'>
					{results}
				</div>
			</div>
			) ;

	}
}

export default Home;