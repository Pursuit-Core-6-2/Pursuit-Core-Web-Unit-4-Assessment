import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
// import VideoDetail from './VideoDetail';
// import YouTube from 'react-youtube';
import VideoList from './VideoList';
import YoutubeAPI from '../axiosAPI'
import API_KEY from '../secretKey'
import { Redirect } from 'react-router-dom';

class Home extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        //if I add this we will see a list of videos right away
        // this.handleSubmit('Dark Souls')
    }

    handleSubmit = async (searchTerm) => {
        const response = await YoutubeAPI.get('search', {
            params: {
                part: 'snippet',
                maxResults: 8,
                key: API_KEY,
                q: searchTerm
            }
        });
        console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        console.log("Working", video)
        this.setState({
            selectedVideo: video
        })
        return <Redirect to='/about' />
    }

    render() {

        const { selectedVideo, videos } = this.state

        return (
            <Grid justify='center' container spacing={10}>
                <Grid container justify="center" spacing={10} item xs={12}>
                    {/* <Grid container justify="center" spacing={10}> */}
                        <Grid item xs={10}>
                            <Search onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={10}>
                            {/* <VideoDetail video={selectedVideo} /> */}
                            <VideoList video={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    {/* </Grid> */}
                </Grid>
            </Grid>
        );
    }
}

export default Home;