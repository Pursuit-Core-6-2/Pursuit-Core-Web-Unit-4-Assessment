import React from 'react';
import Youtube from 'react-youtube';
import Home from './Home'

class Video extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         comment: " ",
         arr: [],
         user:" "
      }
   }
   
   
   
   render() {
     const opts = {
       height: '720',
       width: '1280',
       playerVars: { // https://developers.google.com/youtube/player_parameters
         autoplay: 1
       }
     };
  
     return (
       <YouTube
         videoId=""
         opts={opts}
         onReady={this._onReady}
       />
     );
   }
  
   _onReady(event) {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
   }
 }

 export default Video;