import React, { Component } from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import Youtube from 'react-youtube'


class Videos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: null,
            comment: " ",
            name: " ",
            multiArr: []
        }
    }

    handleChange = (e) => {
        // console.log(e.target)

        this.setState({
            [e.target.name]: e.target.value,
            
        })
  
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

       const {name, comment, multiArr } = this.state
       const nameComment = {name, comment}

      

       this.setState({
           name: '',
           comment: '',
           multiArr: [...multiArr, nameComment],
       })
    }

    render() {
        const { videoId } = this.props.match.params
        const { multiArr, name, comment } = this.state;
        console.log(multiArr)

        const opts = {
            height: '390',
            width: '640',  
        }

        if (!videoId) {
            return <p> no videos</p>
        }
        return (
            <div>
                <h1>Video</h1>
                <Youtube
                    videoId={videoId}
                    opts ={opts}
                />

                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:<input type="text" name="name" onChange={this.handleChange} value={name}/></label>
                    <label>Comments:<input type="text" name="comment" onChange={this.handleChange} value={comment}/></label>
                    <input type="submit" />
                </form>
<hr/>
<br/>
                {multiArr.map(el => {
                    console.log(el.name)
                    return (
                    <>
                    <h4>{el.name}</h4> 
                    <p>{el.comment}</p>
                    <hr/>
                    </>)
                })}
            </div>
        )
    }
}

export default Videos;