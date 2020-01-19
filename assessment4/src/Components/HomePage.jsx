import React from 'react';
import APIKey from '../Secrets'
import SearchResults from './SearchResult'
import axios from 'axios'

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            results:[],
           snippet: 'snippet',
           search: '',
            result: ''
        }
    }

    compoundDidMount () {}

    handleInputChange = (e) => {
        console.log('search', e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    handleFormSubmit = async (e) => {
        // const {list} = this.props
        e.preventDefault()
        const { search, snippet } = this.state
        console.log('form submitted', snippet)

        let params = `?part=${snippet}&key=${APIKey}&p=${search}`
        try {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search/${params}`
            let response = await axios.get(searchUrl)
            console.log('response', response.data.items)
            this.setState({
                results: response.data.items
            })


        } catch (error){
            console.log('error', error)
  }
    }


    render() {
        const { search, results} = this.state
        // console.log('results' , results)
        return(
            <div className='home'>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' onChange={this.handleInputChange} value={search}/>
                    <button>Search</button>
                    <p>No Search Results Yet. Search for videos here!</p>
                    
                   
                    
                     <SearchResults
                        results={results}
                    />  
                    
                </form>
               
                
            </div>
        )
    }
}





export default HomePage;














