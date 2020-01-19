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
    const [state, setState] = useState([{ name: 'test', com: 'Hello World!' }])
    // console.log(state)
    // console.log(props)
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
                onReady={_onReady}
            />

            {/* <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
            <br />
            <Input placeholder='Comment' onChange={(e) => setComment(e.target.value)} value={comment} />
            <br />
            <Button content='Primary' primary onClick={() => {
                setState([...state, { name, com: comment }])
                setName('')
                setComment('')
            }} />
            <hr />
            <div>
                {state.map(ele => {
                    return (
                        <div>
                            <h3>{ele.name}</h3>
                            <p>{ele.com}</p>
                        </div>
                    )
                })}
            </div> */}
        </div>
    );
}

export default VideoPlayer;