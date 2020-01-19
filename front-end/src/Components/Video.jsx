import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import API_KEY from '../secrets.js'
import axios from 'axios'
import YouTube from 'react-youtube';


class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            comment: '',
            nameAndComment: {},
            counter: 0,
        }
    }

    videoOnReady(event) {
        event.target.pauseVideo();

    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    // async componentDidMount() {
    //  
    // }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { name, comment, nameAndComment, counter } = this.state
   

        this.setState({
            nameAndComment: nameAndComment.concat(name)
        })

    }

    render() {
        const { name, comment, nameAndComment } = this.state
        console.log(this.state.nameAndComment)
        const { id } = this.props.match.params
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 0
            }
        }
        return (
            <div className="Home">
                <YouTube
                    videoId={id}
                    opts={opts}
                    onReady={this.videoOnReady}
                />
                <form className="videoSubmit" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input className="name" onChange={this.handleName} placeholder="Name..." />
                    <label htmlFor="comment">Comment:</label>
                    <input className="comment" onChange={this.handleComment} placeholder="..." />
                    <input className="videoInputSubmit" type="submit" value="Submit" />
                </form>
                <h1 className="singlName">{name}</h1>
                <p className="singleComment">{comment}</p>

            </div>
        );
    }

}

export default Video;