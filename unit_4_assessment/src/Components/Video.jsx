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
                commentInput: ""
            }
    }

    handleNameInput = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleCommentInput = (e) => {
        this.setState({
            commentInput: e.target.value
        });
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const { nameInput, commentInput } = this.state;
        console.log("handling submit method starting in the video component");
        try {
            const params = `?api_key=${API_KEY}&q=${searchTerm}`;
            let url = `https://api.giphy.com/v1/gifs/search${params}`;
            let res = await axios.get(url);
            this.setState({
                gifs: res.data.data
            });
            console.log("res.data:", res.data);

        } catch(err) {
            console.log("Error:", err);
        }
    }


    async componentDidMount() {
        const { id } = this.props.match.params;

        try {
            const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;
            const res = await axios.get(url);
            console.log("res.data:", res.data);
            this.setState({
                gif: res.data.data
            });

        } catch(err) {
            console.log("Error:", err);
        }
    }

    render() {
        const { nameInput, commentInput } = this.state;
      

        return(
            <div>
                <form>
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
            </div>
        );
    }
}

export default Video; 