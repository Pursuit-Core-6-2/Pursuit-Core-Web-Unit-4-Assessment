import React from 'react';
// import react  from 'react-youtube'
import axios from 'axios'
import APIKey from '../Secrets'

class VideoPage extends React.Component {
    constructor() {
        super()
        

        this.state = {
            name:'',
            comment:'',
        }
    }

    handleInput = (e) => {
        this.setState({
          name: e.target.value,
          comment: e.target.value 
        })
    }


    handleForm = (e) => {
        e.preventDefault()

    }

    async componentDidMount() {
        try {
            let url = `https://www.googleapis.com/youtube/v3/videos/${}`
            let videos = await axios.get

        } catch (error){
            console.log('error', error)
        }
    }


    render() {
        return(
            <div>
                <form> 
                    <input type='text' placeholder='name'/>
                    <br></br>
                    <input type='text' placeholder='comments...'/>
                    <br></br>
                    <input type='submit'/>

                </form>
            </div>
        )
    }
}

export default VideoPage;