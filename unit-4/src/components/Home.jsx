import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import API_KEY from '../secrets'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchVids: '',
            videos: []
            // results: " ",
        }
    }

    handleChange = (e) => {
        this.setState({
            searchVids: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { searchVids } = this.state
        console.log("searching for:", searchVids)
        try {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${API_KEY}&search=${searchVids}`
            let res = await Axios.get(url)
            console.log(res.data.items)
            this.setState({
                videos: res.data.items
            })
        } catch (err) {
            console.log("error:", err)
        }
    }



    render() {
        const { searchVids, videos } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search" onChange={this.handleChange} value={searchVids} />
                    <input type="submit" />
                </form>

            <div>{
                videos.map(video => {
                    return (
                        <Link to={`/videos/${video.id.videoId}`}>
                            <img src={video.id.videoId} />
                            <p> {video.snippet.title}</p>
                        </Link>
                    )
                })
            }</div >
            </div>

    )
    }
}

export default Home;