import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { Input, Button } from 'semantic-ui-react'
import { getVideoDetails } from '../helperFunctions/apiCalls'

const Video = (props) => {
    // console.log(props)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [state, setState] = useState([{ name: 'test', com: 'Hello World!' }])
    // console.log(props)
    // console.log(props.match.params.id)
    // const data = getVideoDetails(props.match.params.id)
    // console.log('Video Data', data)

    return (
        <div className='VideoPage'>
            <VideoPlayer vidId={props.match.params.id} />

            <br/>

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
                        <div className='Comment'>
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