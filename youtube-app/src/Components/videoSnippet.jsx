import React from 'react';
import { Link } from "react-router-dom";

const VideoSnippet = (props) =>  {
    const {title, imgSrc, vidId, handleClick} = props
     return (
             <li>
                <div>
                    <Link to={`/video/${vidId}`}>
                    <img src={imgSrc} alt={title}></img>
                    {/* <p id={vidId} onClick={handleClick}>{title}</p> */}
                    <p>{title}</p>
                    </Link>
                </div>
             </li>
     )
     
 }



export default VideoSnippet;