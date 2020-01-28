import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap'
import VideoPreview from './VideoPreview/VideoPreview'
import {API_KEY} from '../secrets'


const Search = (props) => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    
    const handleInput = ({target: {value}}) => setSearch(value)
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            let {data: {items}} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search}&key=${API_KEY}&maxResults=8`)
            items = items.map(v => {
                let date = new Date(v.snippet.publishedAt)
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
            setResults(items)
        } catch(error) {
            console.log('error', error)
        }
    
        setSearch('')
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{display: 'flex'}}>
                <FormControl type="search" placeholder="Search" value={search} onChange={handleInput} className="mr-sm-2" />
                <Button style={{backgroundColor: 'red', color: 'white', border: 'none'}} variant="outline-info">Search</Button>
            </Form>
            <br/>
            <Container style={grid}>
                {results}
            </Container>
        </>
    )
}

const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridColumnGap: '0px',
    gridRowGap: '0px',
}

export default Search