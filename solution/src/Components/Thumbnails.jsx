import React, { Component } from 'react';
import Video from './Video.jsx'
import Axios from 'axios';
import apiKey from '../secrets.js';

class Thumbnail extends Component {
    constructor(props) {
        super();
        this.state = {
            url: props.url,
            key: props.id,
            name: props.name,
            id: props.id
        }
    }
    handleThumbnailClick = async (e) => {
        let { id } = this.state;
        let videoCall = await Axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apiKey}`)
        console.log(videoCall.data)
        return(
            <div>
                < Video videoId={id}/>
            </div>
        )
    };
    render() {
        const { url, key, name, id} = this.state;
        return(
            <div className = 'thumbnail-component'>
                <img src={url} alt={key} id={id} onClick = {this.handleThumbnailClick}/>
                <br />
                <p className = "video-title"> {name} </p>
            </div>
        )
    }
};
export default Thumbnail;