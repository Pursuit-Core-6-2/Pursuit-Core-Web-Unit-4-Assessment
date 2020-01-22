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
            // result: '',
            video: '',
            submitted: false
        }
    }

 

    handleInputChange = (e) => {
        console.log('search', e.target.value)
        this.setState({
            search: e.target.value
        })
    }

    handleFormSubmit = async (e) => {
        // const {list} = this.props
        e.preventDefault()
        const {result} = this.props
        const { search, snippet} = this.state
        console.log('form submitted', result)

        let params = `?part=${snippet}&type=video&key=${APIKey}&q=${search}`
        try {
            let searchUrl = `https://www.googleapis.com/youtube/v3/search/${params}`
            let response = await axios.get(searchUrl)
 
            
            console.log('response', response.data.items)
            const data  = response.data.items
            
            console.log('data', data)
            this.setState({
                results: data,
                submitted:true
            })


        } catch (error){
            console.log('error', error)
  }
    }


    render() {
       
        const { search, results, video} = this.state
        // console.log('results' , results)
        return(
            <div className='home'>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' onChange={this.handleInputChange} value={search}/>
                    <button>Search</button>
                    <p>No Search Results Yet. Search for videos here!</p>

                    <SearchResults
                        results={results}
                        video={video}
                    />
                </form>
                 
               
            </div>
        )
        
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}





export default HomePage;














