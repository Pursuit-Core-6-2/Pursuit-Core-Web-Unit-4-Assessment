import React from 'react'

const VideoComments = (props) => {
    const {name, comment} = props
    console.log('in video comments',props)
    return (
        <li>
            <div>
                <h4>{name}</h4>
                <p>{comment}</p>
            </div>
        </li>
    )
}

export default VideoComments;