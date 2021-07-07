import React from 'react';
// import react  from 'react-youtube'
import axios from 'axios'
import APIKey from '../Secrets'
import Youtube from 'react-youtube'

class VideoPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: '',
            title: '',
           snippet: 'snippet',
           name:'',
           comment: ''
        }
    }

    handleNameInput = (e) => {
        this.setState({
          name: e.target.value,
         
        })
        console.log('comment....', e.target.value)
    }

    handleCommentsInput = (e) => {
         this.setState({
             
             comment: e.target.value
         })
         console.log('comment....', e.target.value)
    }


    handleForm = (e) => {
        e.preventDefault()

    }

    async componentDidMount() {
        
        const { snippet} = this.state
        const  id = this.props.match.params.id
 
        let params = `?part=${snippet}&key=${APIKey}&id=${id}`
        try {
            let url = `https://www.googleapis.com/youtube/v3/videos/${params}`
            let response = await axios.get(url)
                console.log('videos', response.data.items[0].id)
            this.setState({
                video: response.data.items[0].id,
                title: response.data.items
            })

        } catch (error){
            console.log('error', error)
        }
    }


    render() {
         const opts = {
             height: '390',
             width: '640',
             playerVars: { // https://developers.google.com/youtube/player_parameters
                 autoplay: 1
             }
         };
        return(
            <div>
                <h1>Video</h1>
                <form> 
                    <input type='text' placeholder='name' onChange={this.handleNameInput} value={this.state.name}/>
                    <br></br>
                    <input type='text' placeholder='comments...' onChange={this.handleCommentsInput} value={this.state.comment}/>
                    <br></br>
                    <input type='submit'/>

                </form>
                 <Youtube
                    title={this.state.title}
                    videoId= {this.state.video}
                    opts={opts}
                    onReady={this._onReady}
                 />
               
            </div>
        )
    }
    _onReady(event) {
         // access to player in all event handlers via event.target
         event.target.pauseVideo();
    }
}

export default VideoPage;