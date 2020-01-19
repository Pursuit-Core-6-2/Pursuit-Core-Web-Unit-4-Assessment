import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
                <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                    <img style={{ marginRight: '20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Paper>
    )
}

export default VideoItem