import React from 'react';
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
          
        }
    }

    render() {
        const  { results, submitted} = this.props
        console.log('results prop', results)
        if (submitted === true) {
            return (
                <p>No Search Results Yet. Search for videos     here!
                </p>
            )
        } else {

            return(
                <div>
               
                    {this.props.results.map(result=> {
                        console.log('check', result.id.videoId)
                        return(
                            <Link to={`/video/${result.id.videoId}`}>
                            <img src=                                 {result.snippet.thumbnails.high.url} alt=''></img>
                            <p>{result.snippet.title}</p>
                            </Link>
                        )
                     })}
             
                </div>
            )
        }
    }     
}



export default SearchResults;