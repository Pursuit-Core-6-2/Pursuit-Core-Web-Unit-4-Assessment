import React, { Component } from 'react'
import Youtube from 'react-youtube'

class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.videoId,
            comments: [],
            name: "",
            comment: ""
        }

    }
}
        