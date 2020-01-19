import React, { Component } from 'react';
import Video from './Video.jsx'
import axios from 'axios';
import apiKey from '../secrets.js';

class Thumbnail extends Component {
    constructor(props) {
        super();
        this.state = {
            url: props.url,
            key: props.id,
            name: props.name,
            id: props.id,
            display: false
        }
    }
    handleThumbnailClick = async () => {
        let { id } = this.state;
        let videoCall = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${apiKey}`);
        console.log(videoCall.data);
        this.setState({
            display: true
        })
    };
    render() {
        const { url, key, name, id, display } = this.state;
        if(display) {
            return(
                <div>
                    <Video videoId={id}/>
                </div>
            )
        } 
        else {
        return(
            <div className = 'thumbnail-component'>
                <img src={url} alt={key} id={id} onClick = {this.handleThumbnailClick}/>
                <br />
                <p className = "video-title"> {name} </p>
            </div>
        )
    }
    }
};
export default Thumbnail;

//handleThumbnailClick is here returning the Video component onClick, however, it does not replace the component entirely but appends it to the page. Another route could be created with the video id as a parameter and when a thumbnail is clicked, could re-route the page to display the soley the video component.