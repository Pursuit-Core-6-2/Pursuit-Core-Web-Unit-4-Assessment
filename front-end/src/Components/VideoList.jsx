import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './videoItem'

const VideoList = ({ videos, onVideoSelectLeft, onVideoSelectRight }) => {
    const listOfVideosLeft = videos.map((video, id) => <VideoItem onVideoSelectLeft={onVideoSelectLeft} key={id} video={video} />)
    const listOfVideosRight = videos.map((video, id) => <VideoItem onVideoSelectRight={onVideoSelectRight} key={id} video={video} />)

    return (

        <Grid container spacing={12}>
            <Grid item xs={6}>
                {listOfVideosLeft.slice(0, 4)}
            </Grid>
            <Grid item xs={6}>
                {listOfVideosRight.slice(4, 8)}
            </Grid>
        </Grid>
    )
}

export default VideoList