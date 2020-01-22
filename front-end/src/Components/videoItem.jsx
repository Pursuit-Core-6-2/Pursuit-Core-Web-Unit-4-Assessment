import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'


const VideoItem = ({ video, onVideoSelect }) => {
    return (
                <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>                    
                    <Link to='/video'><li><img style={{ marginRight: '20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} /></li></Link>
                    <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
                </Paper>
    )
}

export default VideoItem