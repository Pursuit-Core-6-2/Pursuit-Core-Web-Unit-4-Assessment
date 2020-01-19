import React, { Component } from 'react';

class Thumbnail extends Component {
    constructor(props) {
        super();
        this.state = {
            url: props.url,
            key: props.name,
            name: props.name
        }
    }
    render() {
        const { url, key, name} = this.state;
        return(
            <div className = 'thumbnail-component'>
                <img src={url} alt={key} />
                <br />
                <p className = "video-title"> {name} </p>
            </div>
        )
    }
};
export default Thumbnail;