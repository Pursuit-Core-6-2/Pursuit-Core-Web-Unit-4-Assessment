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
            videoId: this.props.videoId,
            commentArray:[]
        }
    }

     handleSubmitForm(e){
        e.preventDefault()
       
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
    componentDidMount = async () => {
        const {id} = this.props.match.params
        try{
            const key = apiKey
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`
            const data = await axios.get(url)
            // const data2 = await axios.get(url2)
            console.log(data)
        }catch(error){
            console.log('err',error)
        }  
    }
    render(){
        const {nameVal, commentVal} = this.state
        const {id} = this.props.match.params
        return(
            <>
            <Youtube
                videoId = {this.props.videoId}
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
                        <input id='comment' type='input' value={commentVal} onChange={this.handleComment}></input>
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