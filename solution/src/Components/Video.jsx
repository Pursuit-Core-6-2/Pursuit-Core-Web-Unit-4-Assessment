import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.videoId,
            name: "",
            comment: "",
        }
    }
    handleOnReady = (e) => {
        e.target.pauseVideo();
    }
    handleComment = (e) => {
        e.preventDefault();
        console.log("Comment submitted");
        const { name, comment } = this.state;
        console.log(name, comment)
    }
    handleNameInput = (e) => {
        console.log("Name input updated");
        let newName = e.target.value;
        this.setState({
            name: newName
        })
    }
    handleCommentInput = (e) => {
        console.log("Comment input updated");
        let newComment = e.target.value;
        this.setState({
            comment: newComment
        })
    }
    render() {
        const { id } = this.state;
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };
        return (
            <div>
                <div className = "video-div" >
                < Youtube videoId={id} opts={opts} onReady={this.handleOnReady} />
                </div>
                <form className = "comments-form" onSubmit = {this.handleComment}>
                    <input placeholder="Name" onChange={this.handleNameInput} />
                    <input placeholder="Comment" onChange={this.handleCommentInput} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Video;