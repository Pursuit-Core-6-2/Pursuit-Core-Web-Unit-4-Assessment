import React from 'react'
import axios from 'axios'
import apiKey from '../secrets'

class VideoPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nameVal:'',
            commentVal:'',
        }
    }

    //  handleSubmitForm(e){
    //     e.preventDefault()
    //     this.setState({
    //         name: e.target.name.value,
    //         comment: e.target.comment.value
    //     })
    //  }
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
    componentDidMount = async () => {
        const {id} = this.props.match.params
        try{
            const key = apiKey
            const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`
            const data = await axios.get(url)
            console.log(data)
        }catch(error){
            console.log('err',error)
        }  
    }
    render(){
        const {nameVal, commentVal, id} = this.state
        return(
            <>
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/videoseries?list=${id}`} frameborder="0"></iframe>
            </div>
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
            </>
        )
    }    
}













export default VideoPage