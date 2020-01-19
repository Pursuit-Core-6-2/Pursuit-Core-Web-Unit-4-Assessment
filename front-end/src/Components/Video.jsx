import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import API_KEY from '../secrets.js'
import axios from 'axios'
import YouTube from 'react-youtube';


class Video extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            comment:'',
          nameAndComment:[]
        }
    }

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log( event.target)
      } 
    handleName =(event)=>{
        this.setState({
            name: event.target.value
        })
    }
    handleComment =(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    async componentDidMount(){
        const { id } = this.props.match.params
        try{

            const videoUrl=`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${API_KEY}&part=snippet`
        let videoUrlResponse = await axios.get(videoUrl)
        console.log(videoUrlResponse.data)

        }catch(error){
            console.log(error)
        }
    }
    handleSubmit= async(event)=>{
        event.preventDefault()
        const{name,comment,nameAndComment} = this.state
        // let videoUrl=`https://www.googleapis.com/youtube/v3/videos?id=gl1aHhXnN1k&key=${API_KEY}&part=snippet`
        // let videoUrlResponse = await axios.get(videoUrl)
        // console.log(videoUrlResponse)
//       
    }
   
    render() {
        const{name, comment,nameAndComment} = this.state
        const { id } = this.props.match.params
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
        }
        
         // https://www.youtube.com/watch?
        return (
            <div className="Home">

<YouTube
        videoId={id}
        opts={opts}
        onReady={this._onReady}
      />
        
           <form onSubmit={this.handleSubmit}>
            <label htmlFor= "name">Name</label>
               <input className="name" onChange={this.handleName}placeholder="Name..."/>
               <label htmlFor="comment">Comment</label>
               <input className="comment" onChange={this.handleComment} placeholder="..."/>
               <input type="submit" value="Submit"/>

           </form>
       

           

            </div>
        );
    }

}

export default Video;