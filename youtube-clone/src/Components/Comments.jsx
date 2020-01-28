import React, {useState} from 'react'
import { ListGroup, Form, FormControl, Button, Container } from 'react-bootstrap'
import YouTube from 'react-youtube'

const Comments = (props) => {
    const [comments, setComments] = useState(props.comments ? props.comments : [])
    const [body, setBody] = useState('')
    const [name, setName] = useState('')

    const turnComments = (comment) => {
        console.log(comment)
        return (
            <ListGroup.Item>
                <h3 className="title">{comment.name}</h3>
                <p>{comment.body}</p>
            </ListGroup.Item>
        )
    }

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const submit = (event) => {
        event.preventDefault()
        let newComments = comments
        newComments.unshift({name, body})
        props.setComments(props.videoID, newComments)
        setComments(newComments)
        setName('')
        setBody('')
    }

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
                videoId={props.videoID}
                opts={opts}
                onReady={_onReady}
                />
                <br/>
            <Form style={{display: 'flex', alignItems: 'center'}} onSubmit={submit}>
                <FormControl required type="text" placeholder="Name" value={name} onChange={({target: {value}})=> setName(value)} className="mr-sm-2" />
                <FormControl required type="text" placeholder="Type your comment here" value={body} onChange={({target: {value}})=> setBody(value)} className="mr-sm-2" />
                <Button type='submit' style={{backgroundColor: 'red', color: 'white', border: 'none'}} variant="outline-info">Submit</Button>
            </Form>
                <br/>
            <ListGroup>
                {comments.map(turnComments)}
            </ListGroup>
        </Container>
    </>)
}



export default Comments