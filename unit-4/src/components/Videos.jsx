import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import Youtube from 'react-youtube'


class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: null,
            comment: " ",
            name: " "
        }
    }

    // async componentDidMount() {
    //     const { videoId } = this.props.match.params
    //     console.log("ID", videoId)
    //     try {
    //         const params = `part=snippet&q=${videoId}&key=${API_KEY}`
    //         const url = `https://www.googleapis.com/youtube/v3/search?${params}`
            
    //         const res = await axios.get(url)
    //         console.log(res.data.items[0])
    //         this.setState({
    //             videos: res.data.items[0]
    //         })
    //     } catch (err) {
    //         console.log("Error:", err)
    //     }
    // }

    // handleChange = (e) => {
    // this.setState({
    //     name: e.target.value,
    //     comment: e.target.value
    // })
    // }

    // handleFormSubmit = (e) => {
    //     e.preventDefault()

    //     this.setState({
    //         name: e.target.value,
    //         comment: e.target.value,
    //     })

    // }

    render() {
        const { videoId } = this.props.match.params
        const { videos, name, comments } = this.state;
        const opts = {
            height: '390',
            width: '640',  
        }

        if (!videos) {
            return <p> no videos</p>
        }
        console.log("videoId", videos)
       
        return (
            <div>
                <h1>Video</h1>
                <Youtube
                    videoId={videoId}
                    opts ={opts}
                />

                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" value={name}>Name:</input>
                    <input type="text"  value={comments}>Comment:</input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Videos;