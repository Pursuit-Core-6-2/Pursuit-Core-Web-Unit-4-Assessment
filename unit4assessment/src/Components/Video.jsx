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
                <form onSubmit={this.handleCommentSubmit}>
                    <input type="text" placeholder="Name..." required onChange={this.handleName}></input>
                    <input type="text" placeholder="Comment..." required onChange={this.handleCom}></input>
                    <button type="submit">Submit</button>
                </form>
                {this.state.commentsArr.map((comment) => {
                    for(let i in comment) {
                        return(
                            <div>
                                <h6>{i}</h6>
                                <p>{comment[i]}</p>
                            </div>
                        )
                    }
                    
                })}
            </div>
        )
    }
}

export default Video;