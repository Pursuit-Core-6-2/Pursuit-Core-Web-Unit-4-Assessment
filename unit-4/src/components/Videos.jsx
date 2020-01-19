import React, {Component} from 'react'
import axios from 'axios'
import API_KEY from '../secrets'


class Videos extends Component {
    constructor(){
        super()
            this.state = {
                videos: null,
                comments: " ",
                name: " "
            }
}

async componentDidMount (){
    const { id } = this.props.match.params
    try{
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}&id=${id}`
        const res = await axios.get(url)
        console.log(res.data.items)
        this.setState({
            videos:res.data.items
        })
    }catch(err){
        console.log("Error:", err)
    }
}

handleChange = (e) => {

this.setState({
    name: e.target.value,
    comment: e.target.value
})
}

    render() {
        const { video, name, comments} = this.state;
        if (!video) {
            return <p> no videos</p>
        }
        return(
<div>
<img src={video.snippet.thumbnails.default.url} alt={video.id.videoId} />

<div>
<input type="text" placeholder="Enter Name" onChange={this.handleChange} value={name}>Name:</input>
<input type="text" placeholder="Enter Comment" onChange={this.handleChange} value={comments}>Comment:</input>
<input type="submit"/>

</div>
</div>
        )
    }
}

export default Videos;