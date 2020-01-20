import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    return (
        <div>
            <YouTube
                videoId={props.vidId}
                opts={opts}
            />
        </div>
    );
}

export default VideoPlayer;