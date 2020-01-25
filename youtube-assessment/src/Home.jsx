import React, {useState, useEffect} from 'react';
import './Home.css';
import { Switch, Route, Link} from "react-router-dom";
import API_KEY from './secret';
import axios from 'axios';
import Video from './Video';


const Home = props => {

	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState(undefined);
	const [sendSearch, setSendSearch] = useState(false);


	const handleTextEntry = (e) => {
		setSearchQuery(e.target.value);
	}

	const handleFormSubmission = (e) => {
		e.preventDefault();
		setSendSearch(true);
	}

	useEffect(() => {
		const nestedFunc = async () => {
		if(sendSearch){
			console.log('lol');
			let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchQuery}&key=AIzaSyAFiPDILpEEiAgseAVth0fSyMaydvsrQpo`);
			console.log(response);
			let resultsArr = [];
			for(let i = 0; i < response.data.items.length; i++){
				let temp = {title: response.data.items[i].snippet.description, thumbnail: response.data.items[i].snippet.thumbnails.high.url, videoId: response.data.items[i].id.videoId};
				resultsArr.push(temp);
			}

			setResults(resultsArr);
			setSendSearch(false);
		}
		}
		nestedFunc();
	}) 




	
		let resultsDis =  <div className='centeredText'>No Search for videos above!</div>;
		if(results){
			resultsDis = results.map((elem) => {
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
				<form onSubmit = {handleFormSubmission}>
					<input type='text' onChange ={handleTextEntry} placeholder='Search'/>
					<button className ='myButton'type='submit'>Search</button>
				</form>
				<div className='resultsDiv'>
					{resultsDis}
				</div>
			</div>
			) ;

	
}

export default Home;