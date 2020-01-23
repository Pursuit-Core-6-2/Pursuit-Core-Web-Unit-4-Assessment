import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Comment from './Comment'
import axios from 'axios'
import API_KEY from '../secrets'

class Video extends Component {
    constructor(props) {
        console.log(props)
        super()
        this.state = {
            video:null,
            submitted: false,
            nameInput: '',
            commentInput: '',
            comments: []
        }
    }

    // onReady = (event) => {
    //     event.target.pauseVideo()
    // }

    handleInput = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewComment = (event) =>{
        event.preventDefault();
        const {nameInput, commentInput, comments} = this.state
        const comment = { //create the comment obj
            nameInput, 
            commentInput
        }
        const newComments = [...comments] // using spread operator to make a copy of empty comments arr

        newComments.unshift(comment) //push new comments into the new comment arr with most recent on top

        this.setState({
            comments: newComments,
            nameInput: '',
            commentInput: '',
            submitted:true
        })

    }

    
    // async componentDidMount() {
    //     const videoId = this.props.match.params.videoId
    //     const rerouteToVideo = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    //     try {
    //         const { data } = await axios.get(rerouteToVideo)
    //         console.log(data)
    //         this.setState({
    //             video: data.items[0]
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

   
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0 //no auto play
            }
        };
        const {videoId} = this.props.match.params
    
        return (
            <div className="video-container">
                <h1>Video</h1>
            
                <YouTube
                    videoId={videoId}
                    onReady={this.onReady}
                    opt={opts}
                />

                <hr></hr>
                <div className="submit-comment">
                    <form className='comment-form' onSubmit = {this.handleNewComment}>
                        <label for="name">Name</label>
                        <br />
                        <input type='text' placeholder='Name..' name ='nameInput' value={this.state.nameInput} onChange = {this.handleInput} />
                        <br />
                        <label for="comment">Comment</label>
                        <br />
                        <input type='text' placeholder='...' name='commentInput' value={this.state.commentInput}onChange ={this.handleInput}/>
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
                <hr></hr>

                <div className="comments">
                    <h1>Comments</h1>
                    {
                    (this.state.comments.length) ?
                        this.state.comments.map(comment =>
                         (
                                <>
                                <h2>{comment.nameInput}</h2>
                                <p>{comment.commentInput}</p>
                                </>
                            )
                        ) : ""
                    } 
    
                </div>

            </div>

        )
    }

}

export default Video;