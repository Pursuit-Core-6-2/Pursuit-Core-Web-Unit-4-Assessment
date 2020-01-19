import React, {Component} from 'react';
import YouTube from 'react-youtube';
 
class Example extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <YouTube
        videoId=""
        opts={opts}
        onReady={this.onReady}
      />
      <div>
          <form>
            <input></input>
            <input></input>
            <button></button>
          </form>
          <ul>
              
          </ul>
      </div>
    );
  }
}
 