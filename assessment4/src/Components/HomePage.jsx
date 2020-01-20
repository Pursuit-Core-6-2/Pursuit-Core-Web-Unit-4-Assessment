import React from 'react';
import APIKey from '../Secrets'
import SearchResults from './SearchResult'
import axios from 'axios'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results:[],
           snippet: 'snippet',
           search: '',
            result: ''
        }
    }

 

    handleInputChange = (e) => {
        console.log('search', e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    handleFormSubmit = async (e, index) => {
        // const {list} = this.props
        e.preventDefault()
        // const {index} = this.props
        const { search, snippet } = this.state
        console.log('form submitted', snippet)

        let params = `?part=${snippet}&key=${APIKey}&q=${search}`
        try {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search/${params}`
            let response = await axios.get(searchUrl)
 
            
            console.log('response', response.data.items)
            const data  = response.data.items
            
            // console.log('data', data)
            this.setState({
                results: data
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














