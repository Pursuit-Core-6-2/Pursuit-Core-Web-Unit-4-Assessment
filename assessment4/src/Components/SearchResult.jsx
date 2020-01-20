import React from 'react';




class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {}
        }
    }

    

    render() {
        const  {results} = this.props
        console.log('check', )
        return(
            <div>
                <div>
                     {  this.props.results.map((result, index)  => {
                        {/* console.log("result", result ) */}
                        console.log('check', result.snippet.thumbnails.high.url )
                        return(
                            < img src = {
                                result.snippet.thumbnails.high.url
                            } >

                            </img>
                        )
                    })}
                </div>
               
                 
            </div>
        )
    }     
    
}



export default SearchResults;