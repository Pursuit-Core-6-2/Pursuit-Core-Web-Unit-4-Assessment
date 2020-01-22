import React, { Component } from 'react'
import Youtube from 'react-youtube'
// import secrets from "./secrets"
class Video extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.match.params.videoId,
            comments: [],
            name: "",
            comment: "",
        }

    }

    options = () => {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            },
            //key: secrets.API_KEY 
        }
        return opts
    }

    _onReady = (e) => {
        e.target.pauseVideo()
    }

    render() {
        let {name, comment} = this.state


        return (
            <div>
                <Youtube
                videoId={this.state.id}
                opts={this.options()}
                onReady={this._onReady} />

                <div>
                    <form>
                        <label htmlFor = "name">Name</label><br/>
                        <input  id = "name"   
                        type = "text" 
                        placeholder = "your name"
                        value = {name}/><br/>
                        
                        <label htmlFor = "comment">Comment</label><br/>
                        <input id = "comment" 
                        type = "text" 
                        placeholder = "your comment"
                        value = {comment}/>
                    </form>
                </div>

            </div>
        )
    }




}
export default Video