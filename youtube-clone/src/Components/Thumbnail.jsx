import React, { Component } from 'react'
import {Card, Button, Media} from 'react-bootstrap'

class Thumbnail extends Component {
    render(){
        return(
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="holder.js/64x64"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Video Title</h5>
                </Media.Body>
            </Media>
        )
    }
}

export default Thumbnail