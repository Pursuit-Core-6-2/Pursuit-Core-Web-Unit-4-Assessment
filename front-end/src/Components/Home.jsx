import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import VideoDetail from './VideoDetail';
// import YouTube from 'react-youtube';
import VideoList from './VideoList';
import YoutubeAPI from '../axiosAPI'
import API_KEY from '../secretKey'


class Home extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        //if I add this we will see a list of videos right away
        this.handleSubmit('Dark Souls')
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

    onVideoSelectLeft = (video) => {
        return <div>Opps</div>
        this.setState({
            selectedVideo: video
        })
    }

    onVideoSelectRight = (video) => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {

        const { selectedVideo, videos } = this.state

        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={10}>
                        <Grid item xs={10}>
                            <Search onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={10}>
                            {/* <VideoDetail video={selectedVideo} /> */}
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelectLeft, this.onVideoSelectRight} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Home;