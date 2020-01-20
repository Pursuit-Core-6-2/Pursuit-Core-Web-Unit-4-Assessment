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
            nameAndComment: [],
            commentArr: [],
            nameArr: []
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
    handleSubmit = async (event) => {
        event.preventDefault()
        const { name, comment, nameAndComment, nameArr, commentArr } = this.state

        if (comment && name) {
            let obj = {
                currentName: name,
                currentComment: comment
            }

            this.setState({
                nameAndComment: [...this.state.nameAndComment, obj],
                name: "",
                comment:""
            })
        }


    }

    render() {
        const { name, comment, nameAndComment } = this.state
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
                    <input className="name" onChange={this.handleName} placeholder="Name..." value={name}/>
                    <label htmlFor="comment">Comment:</label>
                    <input className="comment" onChange={this.handleComment} placeholder="..." value = {comment} />
                    <input className="videoInputSubmit" type="submit" value="Submit" />
                </form>
                {/* <h1 className="singlName">{name}</h1>
                <p className="singleComment">{comment}</p> */}

                <div className="commentsMade">{
                    nameAndComment.map(el => {
                        return <div>
                            <h2 className="singlName"> {el.currentName}</h2>
                            <p className="singleComment"> {el.currentComment}</p>
                        </div>
                    })
                }

                </div>

            </div>
        );
    }

}

export default Video;