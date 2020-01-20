import React from "react"

function YouTubeVid(props){
    return(
        <div>
            <p>{props.title}</p>
            <img src ={props.url} alt = "broken link"/>
            <p>{props.desc}</p>
        </div>
    )
}

export default YouTubeVid