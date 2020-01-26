import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import API_KEY from './secrets.js'

const Home = () => {

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        getThumbnails()
    }, [])

    const getThumbnails = async () => {
        try {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${API_KEY}&type=video`
            let response = await axios.get(url)
            setSearchResults(response.data.items)
            setSearch('')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="Home">
            <input className="searchInput" type="text" placeholder="Search video" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button className="submitButton" onClick={getThumbnails}> Submit </button>

            {!searchResults.length > 0 ? (
                <div>
                    <p className="noResult">No Search Results Yet! Please Submit a Search Above!</p>
                </div>

            ) : (
                    <div className="videoListing">{
                        searchResults.map(result => {
                            return (
                                <Link to={`/video/${result.id.videoId}`}>
                                    <img className="searchResults" src={result.snippet.thumbnails.high.url} />
                                    <h3 className="searchTitleName">{result.snippet.title}</h3>
                                </Link>
                            )
                        })
                    }
                    </div>
                )
            }
        </div>
    );
}
export default Home;