import React, { Component } from 'react';
import axios from 'axios'
import { Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap'
import Thumbnail from './Thumbnail'
import VideoPreview from './VideoPreview/VideoPreview'
import API_KEY from '../secrets'


class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: []
        }
        console.log('Search constructor called', props)
    }
    
    componentDidMount = () => console.log("Search componentDidMount")
    handleInput = ({target: {value}}) => this.setState({search: value})
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            console.log("Inside the TRY")
            let {data: {items}} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${this.state.search}&key=${API_KEY}&maxResults=8`)
            items = items.map(v => {
                let date = new Date(v.snippet.publishedAt)
                console.log(date.toString())
                return (
                    <VideoPreview    
                        videoID={v.id.videoId}
                        videoTitle={v.snippet.title}
                        channelTitle={v.snippet.channelTitle}
                        datePublished={date.toString().slice(0, 15)}
                        thumbnailUrl={v.snippet.thumbnails.medium.url}
                    />
                )
            })
            console.log(items)
            this.setState({results: items})
        } catch(error) {
            console.log("Inside the CATCH", error)
            
        }
    
        console.log("form submitted", this.state.search)
        this.setState({search: ''})
    }


    
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit} style={{display: 'flex'}}>
                    <FormControl type="search" placeholder="Search" value={this.state.search} onChange={this.handleInput} className="mr-sm-2" />
                    <Button style={{backgroundColor: 'red', color: 'white', border: 'none'}} variant="outline-info">Search</Button>
                </Form>
                <br/>
                <Container style={grid}>
                    {this.state.results}
                </Container>
            </>
        )
    }
}

const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
}

export default Search