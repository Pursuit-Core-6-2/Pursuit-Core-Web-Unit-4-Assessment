import React from 'react';
import axios from 'axios';
// import YouTube from "react-youtube";
import Thumbnails from './Thumbnails'
import api_key from '../secrets';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            search: "",
            pics: {},
            message: "No search results yet! Please submit a search above."
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        let commaSearch = this.state.search.split(" ");
        let thumbnailObj = {};
        console.log(commaSearch)
        try {
            let res = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${commaSearch}&key=${api_key}&part=snippet&maxResults=8`);
            let videos = res.data.items;
            console.log(res.data.items)
            videos.map((video) => {
                console.log(video.snippet.thumbnails.default.url)
                // thumbnailArr.push(video.snippet.thumbnails.default.url)
                thumbnailObj[video.snippet.title] = {url: video.snippet.thumbnails.medium.url, id:video.id.videoId};             
            })
            this.setState({
                pics: thumbnailObj,
                message: ""
            })
            

        } catch (error) {
            console.log(error)
        }
       
    }




    render() {
        return (
            <div>
                <h3>YouTube</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <input id="searchInput" type = "text" onChange={this.handleSearchChange} placeholder="Look for videos"></input>
                    <button id="searchButton" type="submit">Search</button>
                </form> 
                <p>{this.state.message}</p>
                <div id="displayedThumbs">
                    <Thumbnails pics={this.state.pics} />    
                </div>      
            </div>
        )
    }
}

export default Home;