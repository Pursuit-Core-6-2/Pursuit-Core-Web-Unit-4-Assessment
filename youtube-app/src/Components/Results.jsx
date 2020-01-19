import React from 'react';
import VideoSnippet from './videoSnippet'

const Results = (props) => {
    const {searchEntered, resultsArr, handleClick} = props 
    if (!searchEntered){
    return (
        <div className="noResultsDiv">
            <p>No Search Results. Search for videos above!</p>
        </div>
    )
 } else {
     return (
         <div className="resultsDiv">
             <ul>
             {resultsArr.map(el => {  
                  let vidId = el.id.videoId
                  let title = el.snippet.title
                  let imgSrc = el.snippet.thumbnails.medium.url
                  return (
                    <VideoSnippet
                    key={title}
                    vidId={vidId}
                    title={title}
                    imgSrc={imgSrc}
                    handleClick={handleClick}
                    />
                  )
              })}
              </ul>
         </div>
     )
 }
}

export default Results;