import React from 'react';




class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {}
        }
    }

    

    render() {
        const  {results, snippet} = this.props
       
        return(
            <div>
                {this.props.results.map(result=> {
                     console.log('check', result.snippet.title)
                    return(
                        <div className='thumbnails'>
                            <img src=                                 {result.snippet.thumbnails.high.url}></img>
                            <p>{result.snippet.title}
                            </p>
                        </div>
                    )
                })}
             </div>
        )
    }     
}



export default SearchResults;