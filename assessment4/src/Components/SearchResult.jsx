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
                        console.log("result", result )
                        return(
                            <img src={results} key={index}></img>
                        )
                    })}
                </div>
               
                 
            </div>
        )
    }     
    
}



export default SearchResults;