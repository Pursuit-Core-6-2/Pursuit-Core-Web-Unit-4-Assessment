import React from 'react';
import VideoSnippet from './videoSnippet'
import VideoPage from './VideoPage'

const Results = (props) => {
    const {searchEntered, resultsArr, selectedVid, selectedVidId, handleClick} = props 
    if (!searchEntered){
    return (
        <div className="noResultsDiv">
            <p>No Search Results. Search for videos above!</p>
        </div>
    )
 } else {
     let mappedArr = resultsArr.map( el => {  
        let vidId =  el.id.videoId
        let title =  el.snippet.title
        let imgSrc = el.snippet.thumbnails.medium.url
        return (
          <VideoSnippet
          key={title}
          vidId={vidId}
          title={title}
          imgSrc={imgSrc}
          handleClick={handleClick}
          selectedVid={selectedVid}
          selectedVidId={selectedVidId}
          />
        )
    })
    if (selectedVid) {
        return (
            <VideoPage
            selectedVidId={selectedVidId}
             />
        )
    } else {
     return (
         <div className="resultsDiv">
             <ul>
                {mappedArr}
              </ul>
         </div>
     )
    
    }
 }
}

export default Results;