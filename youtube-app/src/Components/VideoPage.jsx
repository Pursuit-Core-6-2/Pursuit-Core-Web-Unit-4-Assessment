import React, {Component} from 'react';
import YouTube from 'react-youtube';
 
class VideoPage extends Component {
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
    }
    return (
     <div className="videoDiv">
      <YouTube
        videoId={this.props.selectedVidId}
        opts={opts}
        onReady={this.onReady}
      />
         <div className="formDiv">
          <form>
            <label>Name</label><br></br>
            <input type="text" placeholder="Name.."></input>
            <br></br>
            <label>Comment</label>
            <br></br>
            <input type="text" placeholder="..."></input>
            <button>Submit</button>
          </form>
          <ul>

          </ul>
          </div>
      </div>
    );
  }
}

export default VideoPage;
 