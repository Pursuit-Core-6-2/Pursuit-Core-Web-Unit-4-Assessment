import React, { Component } from 'react';
import API_KEY from '../secrets'
import axios from 'axios'
import YouTube from 'react-youtube';


class Home extends Component{
    constructor() {
        super();
            this.state = {
                apiKey: API_KEY,
                input:"",
                items:[],
                para:"No Search Results. Search for videos above"
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }




    getVideo = async () => {
        const {apiKey, input} = this.state
        const vidURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${apiKey}&order=relevance`
        try{
            const response = await axios.get(vidURL)
            const data = response.data
            const items = data.items
            console.log(items);

            this.setState({
                items:items
            })
           

        }catch(err){
            console.log("error", err);
            
        }
    }
    
    handleChange = e => {
        this.setState({
            input:e.target.value
        })
    }

    handleClick = e => {
       this.setState({
           para:""
       })
        this.getVideo()
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    componentDidUpdate(){
        console.log(this.state);
        
    }
    render(){
        const {input, items, para} = this .state
        const opts = {
            height: '390',
            width: '640',
        
          };
        return(
                <div>
                    <h1>Homepage</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Search"onChange={this.handleChange} value={input}></input>
                        <button className="Button" onClick={this.handleClick}>Search</button>
                        <p>{para}</p>
                        <ul>
                            {items.map((e,i) => {
                            return <li key={i}>{e.snippet.title}<br/><img src={e.snippet.thumbnails.default.url}></img></li>
                            })}
                            {items.map((e, i) => {
                            return <li key={i}><YouTube opts={opts} videoId={e.id.videoId} ></YouTube> </li>
                            })}
                        </ul>
                    </form>

                    
                </div>
        )
    }
}

export default Home