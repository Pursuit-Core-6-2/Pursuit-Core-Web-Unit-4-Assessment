/*
JOSEPH P. PASAOA
Videopage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './Video.css';


/* COMPONENT + EXPORT */
export default class Videopage extends Component {
  state = {

  }


  render() {
    return(
      <div className="stage">
        
        {this.props.match.params.id}

        {/* <YouTube
          key={videoId} 
          videoId={videoId} 
          opts={opts} 

          id={videoId} 
          className={"yt-video"} 
        /> */}
      </div>
    );
  }
}
