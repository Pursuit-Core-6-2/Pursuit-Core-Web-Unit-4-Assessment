import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { Input, Button } from 'semantic-ui-react'


const _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
}

const VideoPlayer = (props) => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [state, setState] = useState([{ name: 'test', comment: 'Hello World' }])
    console.log(state)
    console.log(props)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    const comments = () => {
        state.map(ele => {
            <div>
                <h3>{ele.name}</h3>
                <p>{ele.comment}</p>
            </div>
        })
    }

    return (
        <div>
            {/* <YouTube
                videoId={props.vidId}
                opts={opts}
                onReady={_onReady}
            /> */}
            <Input placeholder='Name' />
            <br />
            <Input placeholder='Comment' />
            <br />
            <Button content='Primary' primary onClick={() => {
                setState([...state, { name, comment }])
                setName = ''
                setComment = ''
            }} />
            <hr />
            <div>
                {comments}
            </div>
        </div>
    );
}

export default VideoPlayer;