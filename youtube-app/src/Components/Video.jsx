import React, { Component } from 'react';
import YouTube from 'react-youtube';

function Video(props){

  
        return(
                <div>
                    <h1>Video</h1>
                    <YouTube opts={props.opts}/>
                </div>
        )
    }


export default Video