import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom';
import API_KEY from '../secrets'
import './CSS/Home.css'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchVids: '',
            videos: [],
            search: true,
        }
    }

    handleChange = (e) => {
        this.setState({
            searchVids: e.target.value,
            search: true,
            // search:false
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { searchVids } = this.state
        // console.log("searching for:", searchVids)
        try {
            const params = `part=snippet&q=${searchVids}&type=video&key=${API_KEY}&maxResults=8`
            const url = `https://www.googleapis.com/youtube/v3/search?${params}`
            let res = await Axios.get(url)
            console.log(res.data.items)
            this.setState({
                videos: res.data.items,
                search: false,
                searchVids: " "
            })
        } catch (err) {
            console.log("error:", err)
        }
    }



    render() {
        const { searchVids, videos, search } = this.state
        if (search) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="inputBox" type="text" placeholder="Search" onChange={this.handleChange} value={searchVids} />
                        <input className="search" type="submit" value="Search"/>
                    </form>

                    <p className="noSearchPara">  No Search Results Found! Please Sumbit a Search above!  </p>
                </div>
            )
            
     }else {
        const thumbnailArr = videos.map(video => {
            // console.log("videoID", video.id.videoId)

        return (
            <Link to={`/videos/${video.id.videoId}`} key={video.snippet.videoId}>
                <img className="img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <p> {video.snippet.title}</p>
            </Link>

        )
    })

            return (
                <div className="vidList">
                <form onSubmit={this.handleSubmit}>
                    <input className="inputBox" type="text" placeholder="Search" onChange={this.handleChange} value={searchVids} />
                    <input className="search" type="submit"  value="Search"/>

                </form>
            <div className = 'container'>
                {thumbnailArr}
            </div>
</div >

            // <videoThumbnail video={video}/>
            )
        }
    }
}


export default Home;