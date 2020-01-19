import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
   constructor(props){
      super()
      this.state = {
         comment: " ",
         arr: [],
         user:" "
      }
   }

handleUser = (event) => {
   this.setState({
       user: event.target.value
   })
}

_onReady(event) {
   // access to player in all event handlers via event.target
   event.target.pauseVideo();
 }

render() {
   const opts = {
      height: '720',
      width: '1280',
      playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
      }
     }
     return (
      <YouTube
        videoId= {this.props.match.params}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}
 export default Video;
