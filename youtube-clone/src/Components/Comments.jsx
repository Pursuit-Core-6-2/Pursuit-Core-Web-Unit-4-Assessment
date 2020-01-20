import React, {Component} from 'react'
import { ListGroup, Form, FormControl, Button, Container } from 'react-bootstrap'
import YouTube from 'react-youtube'

class Comments extends Component {
    constructor(props) {
        super(props) 
        this.initialState = {
            comments: props.comments ? props.comments : [],
            body: '',
            name: '',
        }
        this.state = this.initialState
    }

    turnComments = (comment) => {
        console.log(comment)
        return (
            <ListGroup.Item>
                <h3 className="title">{comment.name}</h3>
                <p>{comment.body}</p>
            </ListGroup.Item>
        )
    }

    handleInput = ({target: {value, id}}) => this.setState({[id]: value})

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    submit = (event) => {
        event.preventDefault()
        let comments = this.state.comments
        comments.unshift({name: this.state.name, body: this.state.body})
        this.props.setComments(this.props.videoID, comments)
        this.setState({comments, name: '', body: ''})
    }

    render() {
        let {
            state: {comments},
            props: {setComments, videoID},
        } = this

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return(<>
            <Container style={{}}>
                <YouTube 
                    videoId={videoID}
                    opts={opts}
                    onReady={this._onReady}
                    />
                    <br/>
                <Form style={{display: 'flex', alignItems: 'center'}} onSubmit={this.submit}>
                    <FormControl id="name" required type="text" placeholder="Name" value={this.state.name} onChange={this.handleInput} className="mr-sm-2" />
                    <FormControl id="body" required type="text" placeholder="Type your comment here" value={this.state.body} onChange={this.handleInput} className="mr-sm-2" />
                    <Button type='submit' style={{backgroundColor: 'red', color: 'white', border: 'none'}} variant="outline-info">Submit</Button>
                </Form>
                    <br/>
                <ListGroup>
                    {comments.map(this.turnComments)}
                </ListGroup>
            </Container>
        </>)
    }
}



export default Comments