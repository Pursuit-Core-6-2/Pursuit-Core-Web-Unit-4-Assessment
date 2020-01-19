/*
JOSEPH P. PASAOA
Videopage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
// import axios from 'axios';

// import './Video.css';


/* COMPONENT + EXPORT */
export default class Videopage extends Component {
  state = {
    comments: []
  }


  render() {
    const videoId = this.props.match.params.id;
    const opts = {
      origin: window.location.origin 
    }


    return(
      <div className="stage">
        <div className="ytvideo-box">
          <YouTube
            key={videoId} 
            videoId={videoId} 
            opts={opts} 

            id={videoId} 
            className={"ytvideo"} 
          />
        </div>

        
      </div>
    );
  }
}
