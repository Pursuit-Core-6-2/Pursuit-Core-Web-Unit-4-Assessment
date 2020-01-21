import React, { Component } from "react"
import secrets from "./secrets"
import axios from "axios"
import YouTube from 'react-youtube'
import YouTubeVid from './youtubeVid'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            key: secrets.API_KEY,
            search_term: "",
            videos: []
        }
    }


    handleChange = (e) => {
        console.log("Search Term:", e.target.value)
        this.setState({
            search_term: e.target.value
        })

    }
    

    handleFromSubmit = async (e) => {
        let { key, search_term } = this.state
        e.preventDefault()

        try {

            let  url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search_term}&key=${key}`
            await axios.get(url)
                .then(res => {
                    console.log(res.data.items[0].id)
                    this.setState({
                        videos: res.data.items
                    })



                })
        } catch (err) {
            console.log(err)
        }
    }
    

    render() {
        let { search_term, videos } = this.state
        const opts = {
            height: '390',
            width: '640',
            playerVars: {  
            //   origin:  "https://localhost:3000",
              autoplay: 1,
            //   enablejsapi: 1,
            //   src: "http://localhost:3000"
            }
          };
          
        
        
        console.log(YouTube)
        
        return (
            <div id="search-field">
                <form onSubmit={this.handleFromSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={search_term}
                        onChange={this.handleChange}
                    />
                    <button>Search</button>
                </form>

                <div>
                    {videos.map((el, index) => {
                        return <YouTube 
                        onReady = {this.onReady}
                        key = {index} 
                        videoId = {el.id.videoId} 
                        opts = {opts} 
                       />
                        // <YouTubeVid 
                        // title = {el.snippet.title}
                        // url = {el.snippet.thumbnails.default.url}
                        // desc = {el.snippet.desc}
                        // key = {index}/>

                    })}
                </div>

            </div>
        )
    }
}

export default HomePage