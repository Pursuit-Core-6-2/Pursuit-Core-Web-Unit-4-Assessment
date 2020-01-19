import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.videoId
        }
    }
    handleOnReady = (e) => {
        e.target.pauseVideo();
    }
    render() {
        const { id } = this.state;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>
                < Youtube videoId={id} opts={opts} onReady={this.handleOnReady} />
            </div>
        )
    }
}
export default Video;