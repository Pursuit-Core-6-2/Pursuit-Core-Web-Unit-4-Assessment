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

    // async componentDidMount() {
    //     const { videoId } = this.props.match.params
    //     console.log("ID", videoId)
    //     try {
    //         const params = `part=snippet&q=${videoId}&key=${API_KEY}`
    //         const url = `https://www.googleapis.com/youtube/v3/search?${params}`
            
    //         const res = await axios.get(url)
    //         console.log(res.data.items[0])
    //         this.setState({
    //             videos: res.data.items[0]
    //         })
    //     } catch (err) {
    //         console.log("Error:", err)
    //     }
    // }

    handleChange = (e) => {
        // console.log(e.target)

        this.setState({
            [e.target.name]: e.target.value,
            
        })
    // this.setState({
    //     name: e.target.name.value,
    //     comment: e.target.comment.value
    // })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

       const {name, comment, multiArr } = this.state
       const nameComment = {name, comment}

       // before: multiArr = []
       // after: multiArr = [nameComment]

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

                {multiArr.map(el => {
                    console.log(el.name)
                    return (
                    <>
                    <h4>{el.name}</h4> 
                    <p>{el.comment}</p>
                    </>)
                })}
            </div>
        )
    }
}

export default Videos;