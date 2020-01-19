import React, {Component} from 'react';
import YouTube from 'react-youtube';
import VideoComments from './VideoComments'
 
class VideoPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            newComment: '',
            newCommenter: ''
        }
    }

    onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    handleNewComment = (event) => {
        let comment = event.target.value
        this.setState({
            newComment: comment
        })
    }

    handleCommenter = (event) => {
        let commenter = event.target.value
        this.setState({
            newCommenter: commenter
        })
    }

    handleSubmittedComment = (event) => {
        event.preventDefault()
        let {comments, newComment, newCommenter} = this.state
        let comment = {name: newCommenter, comment: newComment}
        this.setState({
            comments: [comment, ...comments]
        })
   }

  render() {
      console.log(this.state)
    const {comments } = this.state
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    let mappedArr = comments.map(el => {
        return (
        <VideoComments 
        key={el.name}
        name={el.name}
        comment={el.comment}
        />)
    })
    console.log(mappedArr)
    return (
     <div className="videoDiv">
      <YouTube
        videoId={this.props.selectedVidId}
        opts={opts}
        onReady={this.onReady}
      />
         <div className="formDiv">
          <form onSubmit={this.handleSubmittedComment}>
            <label>Name</label><br></br>
            <input type="text" placeholder="Name.." onChange={this.handleCommenter}></input>
            <br></br>
            <label>Comment</label>
            <br></br>
            <input type="text" placeholder="..." onChange={this.handleNewComment}></input>
            <br></br>
            <button>Submit</button>
          </form>
          <ul>
            {mappedArr}
          </ul>
          </div>
      </div>
    );
  }
}

export default VideoPage;
 