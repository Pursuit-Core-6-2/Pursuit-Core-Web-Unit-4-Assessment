import React, { Component } from 'react'
import { apiKey } from '../../secrets'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './HomePage.css'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            results: [],
            clicked: false,
            clickedVideo: ''
        }
    }

    handleInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.prevState,
            [e.target.name]: value
        });
    };

    searchVideo = async () => {
        try {
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${this.state.search}&key=${apiKey}`)

            this.setState({
                results: items
            })

        } catch (error) {
            console.log(error);

        }
    }


    render() {
        const { results } = this.state

        return (
            <div className='homepage' >

                <form onSubmit={e => e.preventDefault()} className='homepageForm'>
                    <input type="text" name='search' placeholder='   search...' onChange={this.handleInput} className='inputBar' />
                    <input type="submit" value='search' onClick={this.searchVideo} className='searchButton' />
                </form>
                {results.length === 0 ? <div className='nullResults'>No Search Results Yet!, Please submit a search above</div> :
                    (<div className='display'>
                        {
                            this.state.results ? results.map(el => {
                                return (

                                    <div className='thumbnail'>
                                        <Link id={el.id.videoId} to={`/video/${el.id.videoId}`} params={{ testValue: "hello" }} className='thumbnail'>
                                            <img src={el.snippet.thumbnails.medium.url} alt="thumbnail" />
                                            <p>{el.snippet.title}</p>
                                        </Link>
                                    </div>

                                )
                            }) : null
                        }
                    </div>
                    )}
            </div>
        )
    }
}
export default HomePage