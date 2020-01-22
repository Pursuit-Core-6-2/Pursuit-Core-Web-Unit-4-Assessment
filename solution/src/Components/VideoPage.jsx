import React from 'react'
import axios from 'axios'
import Youtube from 'react-youtube'
import apiKey from '../secrets'

class VideoPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nameVal:'',
            commentVal:'',
            videoId: props.match.params,
            postArray:[]
        }
    }

     handleSubmitForm = (e) => {
        e.preventDefault()
        const {nameVal, commentVal} = this.state
       const {postArray} = this.state
       postArray.push({nameVal: nameVal, commentVal: commentVal})
       this.setState({
           postArray: postArray
       })
       console.log(postArray)
     }
    handleName = (e) => {
        console.log(e.target.value)
        this.setState ({
            nameVal : e.target.value
        })
    }

    handleComment = (e) => {
        console.log(e.target.value)
        this.setState ({
            commentVal: e.target.value
        })
    }

    onReady = (e) => {
        e.target.pauseVideo()
    }

    async componentDidMount(){
        const {videoId} = this.props.match.params
        try{
            const key = apiKey
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${key}`
            const data = await axios.get(url)
            console.log(data)
        }catch(error){
            console.log('err',error)
        }  
    }
    render(){
        const {nameVal, commentVal, postArray} = this.state
        const {videoId} = this.props.match.params
        const mapComments = postArray.map(post => {
            return(
                <div>
                    <h3>{post.nameVal}</h3>
                    <p>{post.commentVal}</p>
                </div>
            )
        })
        return(
            <>
            <Youtube
                videoId = {videoId}
                onReady = {this.onReady}
            />
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <label>
                        Name:
                        <input id='name' type='input' value={nameVal} onChange={this.handleName}></input>
                    </label>
                    <br></br>
                    <label>
                        Comment
                        <input id='comment' type='input' value={commentVal} onChange={this.handleComment}>
                        </input>
                    </label>
                    <br></br>
                    <input type='submit'></input>
                </form>
            </div>
            <div>
                {mapComments}
            </div>   
            </>
        )
    }    
}













export default VideoPage