import React, { Component } from 'react';
import Thumbnail from './Thumbnails'
import axios from 'axios';
import apiKey from '../secrets.js'

class SearchFeed extends Component {
    constructor() {
        super();
        this.state = {
            noSearch: true,
            inputValue: '',
            ytResults: []
        }
    }
    handleSearch = async (e) => {
        e.preventDefault();
        let { inputValue } = this.state;
        try {
            let apiResults = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${inputValue}&key=${apiKey}`).then((res) => { return res.data.items })
            this.setState({
                ytResults: apiResults
            })
        }
        catch (err) {
            console.log("There was an error:", err)
        }
        this.setState({
            noSearch: false
        });
    }
    handleInputValue = (e) => {
        let input = e.target.value;
        this.setState({
            inputValue: input
        })
    };
    render() {
        const { noSearch, ytResults } = this.state;
        if (noSearch) {
            return (
                <div className="search-bar">
                    <form onSubmit={this.handleSearch}>
                        <input type='text' placeholder='Search for videos here' onChange={this.handleInputValue} />
                        <input type="submit" value="Search" />
                    </form>
                    <h3> No search results! Search for something above!</h3>
                </div>
            )
        }
        else if (!noSearch && ytResults) {
            let thumbnailArr = ytResults.map((elem) => {
                return < Thumbnail url={elem.snippet.thumbnails.default.url} key={elem.id.videoId} id = {elem.id.videoId} name={elem.snippet.title}/>
            })
            return (
                <div>
                    <div className="search-bar">
                        <form onSubmit={this.handleSearch}>
                            <input type='text' placeholder='Search for videos here' onChange={this.handleInputValue} />
                            <input type="submit" value="Search" />
                        </form>
                    </div>
                    <div className="thumbnail-container">
                        {thumbnailArr}
                    </div>
                </div>
            )
        }
        else {
            return (
                <h1>
                    Page not found
                </h1>
            )
        }
    }
}
export default SearchFeed;