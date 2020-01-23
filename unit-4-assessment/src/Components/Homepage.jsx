import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import Thumbnail from './Thumbnail'

class Homepage extends Component {
    constructor() {
        super()
        this.state = {
            submitted: false,
            input: '',
            feed: []
        }
    }

    componentDidMount() {
        console.log('mounted')
    }

    handleInput = (event) => {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('form submitted')

        const { input } = this.state
        const getVideos = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${input}&type=video&key=${API_KEY}`
        try {
            const { data } = await axios.get(getVideos)
            let payload = data.items
            console.log(data.items)

            this.setState({
                feed: payload,
                submitted: true
            })

            console.log(this.state)
        } catch (error) {
            console.log(error)
        }

    }

    // componentDidUpdate(){
    //     this.handlePostClick();
    // }

    render() {
        const { feed, submitted } = this.state
        if (!submitted) {
            return (
                <div className='homePg'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' onChange={this.handleInput} placeholder='Search...' />
                        <button>Search</button>
                    </form>
                    <div className='noSearch'>
                        <p>No Search Results Yet! Please submit a search above!</p>
                    </div>

                </div>
            )
        } else {
            const thumbnailArr =
                feed.map(el => (
                    <Thumbnail
                        imgSrc={el.snippet.thumbnails.medium.url}
                        title={el.snippet.title}
                        id={el.id.videoId}
                        key={el.snippet.channelId}
                        handlePostClick={this.handlePostClick}
                        alt='yt video'
                    >
                        {el}
                    </Thumbnail>
                ))

            return (
                <div className='homePg'>
                    <form onSubmit={this.handleSubmit} className='Search'>
                        <input type='text' onChange={this.handleInput} placeholder='Search...' />
                        <button id='searchBtn'>Search</button>
                    </form>
                    <div className="container">
                        {thumbnailArr}
                    </div>
                </div>
            )
        }
    }

}

export default Homepage