import React, { Component } from 'react'
import Youtube from 'react-youtube'
import secrets from "./secrets"
class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.videoId,
            comments: [],
            name: "",
            comment: ""
        }

    }

    options = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            },
            //key: secrets.API_KEY 
        }
        return opts
    }

    _onReady = (e) => {
        e.target.pauseVideo()
    }

    render() {
        return (
            <div>
                <Youtube
                    videoId={this.state.videoId}
                    // opts={this.options()}
                    onReady={this._onReady} />

            </div>

        )
    }




}
export default Video