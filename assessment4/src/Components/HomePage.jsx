import React from 'react';
import APIKey from '../Secrets'
import axios from 'axios'

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            results:'',
           snippet: 'snippet',
           search: ''
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
        e.preventDefault()
        const { search, snippet } = this.state
        console.log('form submitted', snippet)

        let params = `?part=${snippet}&key=${APIKey}&p=${search}`
        try {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search/${params}`
            let response = await axios.get(searchUrl)
            

        } catch (error){
            console.log('error', error)
  }
    }


    render() {
        const { search} = this.state
        return(
            <div className='home'>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' onChange={this.handleInputChange} value={search}/>
                    <button>Search</button>
                    <p>No Search Results Yet. Search for videos here!</p>
                </form>
                
            </div>
        )
    }
}





export default HomePage;














