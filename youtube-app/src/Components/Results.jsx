import React, {Component} from 'react';

const Results = (props) => {
    const {searchEntered} = props 
    if (!searchEntered){
    return (
        <div className="noResultsDiv">
            <p>No Search Results. Search for videos above!</p>
        </div>
    )
 } else {
     return (
         <div className="resultsDiv">
             <p>Results will go hereeeee</p>
         </div>
     )
 }
}

export default Results;