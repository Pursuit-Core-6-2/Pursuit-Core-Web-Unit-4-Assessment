import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Thumbnail extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className='card' onClick={this.props.handlePostClick} id={this.props.id}>
                <Link to = {`/video/${this.props.id}`}>
                <img src={this.props.imgSrc} id={this.props.id} alt={this.props.alt} />
                <h4 id={this.props.id}>{this.props.title}</h4>
                </Link>
                

            </div>
        )
    }
}

export default Thumbnail