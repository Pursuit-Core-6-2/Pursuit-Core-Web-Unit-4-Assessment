import React from 'react';
import { Link } from 'react-router-dom'
class Image extends React.Component {
    
    render() {
        let { images } = this.props 
        let imageArr= [];
        for(let i in images) {
            let link = `/video/${images[i].id}`
            imageArr.push(
                <div >   
                    <Link to={link}><img src={images[i].url} alt=" "></img></Link>
                    <p>{i}</p>
                </div>)            
        }
        return(imageArr)
    }
}
export default Image










