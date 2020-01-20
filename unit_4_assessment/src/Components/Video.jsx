import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

class Video extends Component {
    constructor() {
            super();
            this.state = {
                nameInput: "",
                commentInput: "",
                id: "",
                posts: []
            }
    }

    async componentDidMount () {
        console.log("props:", this.props.match);
         let id = this.props.match.params.id
         console.log(id.slice(1));

        await axios.get(`https://www.youtube.com/watch?v=${id}`)
        this.setState({
            id: id
        })
  }

    handleNameInput = (e) => {
        this.setState({
            nameInput: e.target.value
        });
    }

    handleCommentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { nameInput, commentInput, posts } = this.state;
        console.log("handling submit method starting in the video component");
        // try {
        //     const params = `?api_key=${API_KEY}&q=${searchTerm}`;
        //     let url = `https://api.giphy.com/v1/gifs/search${params}`;
        //     let res = await axios.get(url);
        //     this.setState({
        //         gifs: res.data.data
        //     });
        //     console.log("res.data:", res.data);

        // } catch(err) {
        //     console.log("Error:", err);
        // }
        posts.push({
            name: nameInput,
            comment: commentInput
        });
        console.log(posts);
        this.setState({
            posts: posts
        });
    }

    render() {
        const { nameInput, commentInput, id, posts } = this.state;
      

        return(
            <div>
                 <div className="youtubeVideoDivs">
                        <YouTube
                            className="youtubeElement"
                            videoId={id} 
                            id={id}                       
                        />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="name"
                        onChange={this.handleNameInput}
                        value={nameInput}
                    />
                    <input 
                        type="text"
                        placeholder="comment"
                        onChange={this.handleCommentInput}
                        value={commentInput}
                    />
                    <input type="submit"/>
                </form>

                <div>
                    {posts.map(element => {
                        return (
                            <div className="postsWrapper">
                                <h2>Name: {element.name}</h2>
                                <h3>Comment: {element.comment}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        );
    }
}

export default Video; 