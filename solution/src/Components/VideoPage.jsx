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
            commentArray:[]
        }
    }

     handleSubmitForm(e){
        e.preventDefault()
        console.log(e.target.value)
       const {commentArray} = this.state
    //    this.setState({
    //        commentArray: commentArray.push()
    //    })
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
            // const data2 = await axios.get(url2)
            console.log(data)
        }catch(error){
            console.log('err',error)
        }  
    }
    render(){
        const {nameVal, commentVal} = this.state
        const {videoId} = this.props.match.params
        return(
            <>
            <Youtube
                videoId = {videoId}
                onReady = {this.onReady}
            />
            {/* <Video videoId ={videoId}/> */}
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
                <ul>
                    
                </ul>
            </>
        )
    }    
}













export default VideoPage