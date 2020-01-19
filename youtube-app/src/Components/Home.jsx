import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Input, Button } from 'semantic-ui-react'
import { getVideoDetails } from '../helperFunctions/apiCalls'

const Home = (props) => {
    const openVideo = async (id) => {
        const data = await getVideoDetails(id)
        console.log(data)
        props.changeVidDetails(data.data)
        props.history.push(`/videos/${id}`)
    }
    console.log(props)
    return (
        <div>
            <Input
                action={<Button onClick={(e) => props.enterSearch(e)}>Search</Button>}
                placeholder='Search...'
                onChange={(e) => props.changeSearch(e)}
                onKeyUp={(e) => props.enterSearch(e)}
                className='SearchBar'
            />
            <div className='VideosContainer'>
                {props.videoList.map(vid => {
                    return (
                        <div key={vid.id.videoId} id={vid.id.videoId} className='VideoDetails'>
                            <img
                                src={vid.snippet.thumbnails.medium.url}
                                onClick={() => openVideo(vid.id.videoId)}
                                className='VideoThumbnail'
                            />
                            <h4 onClick={() => openVideo(vid.id.videoId)}>
                                {vid.snippet.title}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default withRouter(Home)