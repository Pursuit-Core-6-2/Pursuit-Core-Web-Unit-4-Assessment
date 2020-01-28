import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';
import { Link } from 'react-router-dom';

const VideoPreview = (props) => {
    const videoID = props.videoID
    const videoTitle = props.videoTitle
    const channelTitle = props.channelTitle
    const datePublished = props.datePublished
    const thumbnailUrl = props.thumbnailUrl

    return (
        <div className='video-preview'>
            <Link to={`/video/${videoID}`}>
                <div className='image-container'>
                    <Image src={thumbnailUrl} />
                </div>
            </Link>
            <div className='video-info'>
                <div className='semi-bold show-max-two-lines'>{videoTitle}</div>
                <div className='video-preview-metadata-container'>
                    <div className='channel-title'>{channelTitle}</div>
                    <div><span>{datePublished}</span></div>
                </div>
            </div>
        </div>
    );
}

export default VideoPreview