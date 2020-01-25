import React, { Component } from 'react';
import Youtube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.match.params.videoId,
            name: "",
            comment: "",
        }
    }
    handleOnReady = (e) => {
        e.target.playVideo();
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
    handleComment = (e) => {
        e.preventDefault();
        const { name, comment } = this.state;
        return (
            <p> {name} : {comment}</p>
        )
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
                <div className="video-div" >
                    < Youtube videoId={id} opts={opts} onReady={this.handleOnReady} />
                </div>
                <br />
                <form className="comments-form" onSubmit={this.handleComment}>
                    <input placeholder="Name" onChange={this.handleNameInput} /> <br />
                    <input placeholder="Comment" onChange={this.handleCommentInput} /> <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Video;

// this component is missing the final post which will append the input values within the form and post a comment to the beginning of a paragraph or list item
