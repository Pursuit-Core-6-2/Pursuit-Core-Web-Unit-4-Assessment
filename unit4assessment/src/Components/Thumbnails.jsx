import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom'
import Video from "./Video"
class Thumbnails extends React.Component {
    constructor() {
        super()
    }

    takeToVideo = () => {
        console.log("This was clicked")
    }

    render() {
        let { pics } = this.props 
        // console.log(pics)
        let printedPics = [];
        for(let i in pics) {
            let link = `/video/${pics[i].id}`
            console.log(i)
            printedPics.push(
                <div >   
                    <Link to={link}><img src={pics[i].url}></img></Link>
                    <p>{i}</p>
                </div>)            
        }
        return(printedPics)
    }
}

export default Thumbnails