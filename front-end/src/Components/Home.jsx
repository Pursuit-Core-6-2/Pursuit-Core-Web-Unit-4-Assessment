import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import YouTube from 'react-youtube';
import API_KEY from '../secrets.js'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            search: "",
            searchResults: []
        }
    }



    videoOnReady(event) {
        event.target.pauseVideo();

    }


    handleSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }


    handleSubmit = async (event) => {
        event.preventDefault()
        const { search } = this.state
        try {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${API_KEY}&type=video`
            let response = await axios.get(url)

            this.setState({
                searchResults: response.data.items
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { search, searchResults } = this.state
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        }
        return (
            <div className="Home">
                <form onSubmit={this.handleSubmit}>
                    <input className="searchInput" type="text" placeholder="Search video" onChange={this.handleSearch} value={search} />
                    <input className="submitButton" type="submit" value="search" />
                </form>
                <div className="videoListing">{
                    searchResults.map(result => {
                        return (
                            <Link to={`/video/${result.id.videoId}`}>


                                <YouTube
                                    className="searchResults"
                                    videoId={result.id.videoId}
                                    opts={opts}
                                    onReady={this.videoOnReady}

                                />

                                {/* <img className="searchResults" src={result.snippet.thumbnails.high.url} /> */}
                                <h3 className="searchTitleName">{result.snippet.title}</h3>
                            </Link>

                        )
                    })
                }

                </div>

            </div>
        );
    }

}

export default Home;