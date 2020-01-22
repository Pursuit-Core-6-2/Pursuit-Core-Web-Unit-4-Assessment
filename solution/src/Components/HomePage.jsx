import React from 'react'
// import Video from './Video'
import axios from 'axios'
import {Switch, Route, Link} from 'react-router-dom'
import apiKey from '../secrets'

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {
            searchValue: '',
            message: 'No results. Enter a search term query',
            searchResults: [],  
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState ({
            searchValue : e.target.value
        })
    }

    getSearchResults = async (e) => {
        e.preventDefault()
        const {searchValue} = this.state
        try{
            const key = apiKey
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchValue}&key=${key}`
            const data = await axios.get(url)
            const items = data.data.items
            console.log(items)
            console.log(items[0].id.videoId)

            this.setState({
                searchResults: items,
            })
        }catch(error){
            console.log('err', error)
        }   
    }


    render(){
        const {searchValue, searchResults} = this.state
        return(
            <>
            <div>
                <form onSubmit={this.getSearchResults}>
                    <input type='search' onChange= {this.handleSearch} value={searchValue} placeholder='Search'/>
                    <input type='submit'/>
                </form>  
            </div>    
            <div>{  
                searchResults.map(item => {
                    return(
                        <Link to= {`/video/${item.id.videoId}`}>
                            <p>{item.snippet.title}</p>
                            <img src={item.snippet.thumbnails.high.url} /> 
                        </Link>
                     )
                })}
            </div> 
            </> 
        )
            
    }
}

export default HomePage 