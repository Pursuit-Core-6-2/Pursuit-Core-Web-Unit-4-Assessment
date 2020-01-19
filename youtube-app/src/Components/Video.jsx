import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { getVideoDetails } from '../helperFunctions/apiCalls'

const Video = (props) => {
    // console.log(props)
    // console.log(props.match.params.id)
    // const data = getVideoDetails(props.match.params.id)
    // console.log('Video Data', data)

    return (
        <div>
            <VideoPlayer vidId={props.match.params.id} />
        </div>
    )
}

export default Video