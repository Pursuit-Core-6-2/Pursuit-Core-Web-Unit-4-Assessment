import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


const Video = (props) => {

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [nameAndComment, setNameAndComment] = useState([])
    const videoOnReady = (e) => {
        e.target.pauseVideo();
    }

    const handleNameAndComment = () => {
        if (comment && name) {
            let obj = {
                currentName: name,
                currentComment: comment
            }
            setNameAndComment([...nameAndComment, obj])
            setComment('')
            setName('')
            
        }
    }

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
                videoId={props.match.params.id}
                opts={opts}
                onReady={videoOnReady}
            />

            <label htmlFor="name">Name:</label>
            <input className="name" onChange={(e) => setName(e.target.value)} placeholder="Name..." value={name} />
            <label htmlFor="comment">Comment:</label>
            <input className="comment" onChange={(e) => setComment(e.target.value)} placeholder="..." value={comment} />
            <input className="videoInputSubmit" type="submit" value="Submit" />
            <button onClick={handleNameAndComment}>Submit</button>
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

export default Video;