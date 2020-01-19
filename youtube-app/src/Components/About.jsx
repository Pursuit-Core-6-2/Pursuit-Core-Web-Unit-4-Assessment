import React, {Component} from 'react';

class About extends Component {
    render(){
    return (
        <div>
            <h1>About</h1>
            <p>This is a web app that allows users to search for videos using the YouTube Api. 
                A search for a video returns the 8 most popular results. From those results users can 
                click on a video to watch it, if they do click to watch it user's are redirected to a page where
                they can watch the video and leave comments with their names. Created by Briany Taveras.</p>
        </div>
    )
 }
}

export default About;