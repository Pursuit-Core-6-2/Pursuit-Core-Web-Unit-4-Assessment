import React from 'react';
import YouTube from 'react-youtube';


class Video extends React.Component {
    constructor(props) {
        super()
        this.state = {
            commentsArr: [], 
            name: "",
            comment: ""
        }
    }

    handleCommentSubmit = (event) => {
        let commentObj = {};
        let newArr = this.state.commentsArr
        event.preventDefault()
        console.log("submitted")
        commentObj[this.state.name] = this.state.comment;
        newArr.unshift(commentObj)
        this.setState({
            comments: newArr
        })
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCom = (event) => {
        this.setState({
            comment: event.target.value
        })
    }



    render() {
        const {id} = this.props.match.params
        console.log(id)
        return (
            <div>
                <YouTube videoId={id}/>
                <form id="videoCommentForm" onSubmit={this.handleCommentSubmit}>
                    <label for="name">Name:</label>
                        <input type="text" placeholder="Name..." required onChange={this.handleName}></input>
                        <hr></hr>
                    <label for="comment">Comment:</label>
                        <input type="text" placeholder="Comment..." required onChange={this.handleCom}></input>
                        <hr></hr>
                    <button type="submit">Submit</button>
                </form>
                <div id="commentSection">
                    {this.state.commentsArr.map((comment) => {
                        for(let i in comment) {
                            return(
                                <div>
                                    <h3>{i}</h3>
                                    <p>{comment[i]}</p>
                                    <hr></hr>
                                </div>
                            )
                        }
                        
                    })}
                </div>
            </div>
        )
    }
}

export default Video;