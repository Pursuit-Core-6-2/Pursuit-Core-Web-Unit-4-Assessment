import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { Input, Button } from 'semantic-ui-react'

const Video = (props) => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [state, setState] = useState([{ name: 'Be named he who must not', com: '🔥' }])

    return (
        <div className='VideoPage'>
            <VideoPlayer vidId={props.match.params.id} />
            <br />
            <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
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
                        <div className='Comment' key={ele.name}>
                            <h3>{ele.name}</h3>
                            <p>{ele.com}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Video