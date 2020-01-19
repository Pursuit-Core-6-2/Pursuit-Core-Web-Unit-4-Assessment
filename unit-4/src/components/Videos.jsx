import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import Youtube from 'react-youtube'


class Videos extends Component {
    constructor() {
        super()
        this.state = {
            videos: null,
            comment: " ",
            name: " "
        }
    }

    async componentDidMount() {
        const { videoId } = this.props.match.params
        console.log("ID", videoId)
        try {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${videoId}`
            const res = await axios.get(url)
            console.log(res.data.items)
            this.setState({
                videos: videoId
            })
        } catch (err) {
            console.log("Error:", err)
        }
    }

    // handleChange = (e) => {
    // this.setState({
    //     name: e.target.value,
    //     comment: e.target.value
    // })
    // }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.value,
            comment: e.target.value,
        })

    }

    render() {
        const { videos, name, comments } = this.state;
        if (!videos) {
            return <p> no videos</p>

        }

        return (
            <div>

                <Youtube
                    videos={videos}
                />

                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" placeholder="Enter Name" value={name}>Name:</input>
                    <input type="text" placeholder="Enter Comment" value={comments}>Comment:</input>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Videos;