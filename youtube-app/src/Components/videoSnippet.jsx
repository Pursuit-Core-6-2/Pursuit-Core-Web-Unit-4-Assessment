import React from 'react';

const VideoSnippet = (props) => {
    const {title, imgSrc, handleClick, vidId} = props
     return (
             <li>
                <div>
                    <img src={imgSrc} alt={title}></img>
                    <p id={vidId} onClick={handleClick}>{title}</p>
                </div>
             </li>
                  
     )
 }


export default VideoSnippet;