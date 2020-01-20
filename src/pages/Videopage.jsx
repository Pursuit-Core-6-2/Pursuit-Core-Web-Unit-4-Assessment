/*
JOSEPH P. PASAOA
Videopage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './Videopage.css';

import CommentCard from '../components/CommentCard';


const {
  processInput
} = require('../helpers/globalHelp.jsx');


/* COMPONENT + EXPORT */
export default class Videopage extends Component {
  state = {
    nameTxt: "",
    commentTxt: "",
    errorMessage: "",
    comments: []
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const nameCheck = processInput(this.state.nameTxt, "name");
    const cmtCheck = processInput(this.state.commentTxt, "comment");
      const [ namePass, namePayload ] = [ nameCheck.pass, nameCheck.payload ];
      const [ cmtPass, cmtPayload ] = [ cmtCheck.pass, cmtCheck.payload ];
    if (!namePass && !cmtPass) {
      this.setState({
          errorMessage: "Invalid name and comment. Please re-enter them and try again."
      });
    } else if (!namePass || !cmtPass) {
      this.setState({
          errorMessage: !namePass ? namePayload : cmtPayload
      });
    } else {
      const newCommentObj = {
        name: namePayload,
        comment: cmtPayload
      }
      this.refs.input.blur();
      this.setState((state, props) => {
          return { 
            nameTxt: "",
            commentTxt: "",
            errorMessage: "",
            comments: [
              newCommentObj,
              ...state.comments
            ]
        }
      });
    }
  }


  render() {
    const videoId = this.props.match.params.id;
    const { nameTxt, commentTxt, errorMessage, comments } = this.state;

    const opts = {
      height: '539',
      width: '720',
      playerVars: {
        origin: "https://localhost:3000",
        autoplay: 1,
      }
    }

    let listComments = null;
    if (comments.length) {
      listComments = comments.map(({name, comment}, i) => {
          return (
            <CommentCard 
              key={videoId + "-" + i}
              name={name} 
              comment={comment} 
            />
          );
      });
    }


    return(
      <div className="stage">

        <div className="ytvideo-box">
          <YouTube
            key={videoId} 
            videoId={videoId} 
            opts={opts} 

            id={videoId} 
            className={"ytvideo"} 
          />
        </div>

        <form className="form-comments" onSubmit={this.handleSubmit}>
          <label htmlFor="nameTxt">Name</label>
          <input 
            type="text" 
            name="nameTxt" 
            id="nameTxt" 
            className="input-name" 
            ref="input" 
            value={nameTxt} 
            onChange={this.handleChange} 
            required 
          />
          <label htmlFor="commentTxt">Comment</label>
          <input 
            type="text" 
            name="commentTxt" 
            id="commentTxt" 
            className="input-comment" 
            ref="input" 
            value={commentTxt} 
            onChange={this.handleChange} 
            required 
          />
          <button className="btn-search">Search</button>
        </form>

        <div className="msg-error">{errorMessage}</div>

        <div className="display-comments">
          {listComments}
        </div>

      </div>
    );
  }
}
