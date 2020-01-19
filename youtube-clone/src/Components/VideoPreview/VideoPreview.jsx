import React from 'react';
import {Image} from 'semantic-ui-react';
import './VideoPreview.scss';
import { Link } from 'react-router-dom';


class VideoPreview extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            videoID: props.videoID,
            videoTitle: props.videoTitle,
            channelTitle: props.channelTitle,
            datePublished: props.datePublished,
            thumbnailUrl: props.thumbnailUrl,
        }

    }

    render() {
        let {videoID, videoTitle, channelTitle, datePublished, thumbnailUrl} = this.state
        //{videoTitle: 'Example Video title', channelTitle: 'Some Channel Name', datePublished: 'Jan 1, 2020'}

        return (
            <div className='video-preview'>
                <Link to={`/video/${videoID}`}>
                    <div className='image-container'>
                        <Image src={thumbnailUrl} />
                        {/* <div className='time-label'>
                            <span>05:22</span>
                        </div> */}
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
}
export default VideoPreview