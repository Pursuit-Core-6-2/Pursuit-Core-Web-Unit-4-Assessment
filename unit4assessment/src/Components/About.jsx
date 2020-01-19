import React from 'react';
import YouTube from 'react-youtube'


class About extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Peter"
        }
    }

    render() {
        return (
            <div>
                <img id="aboutImg" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/82202526_2938061709540359_5996385523357188096_o.jpg?_nc_cat=104&_nc_oc=AQkuBh4WZ2Ybj4LMyko7E6MUY4I0axczb-SV6p2X1iWkvKaQ0Cu7IV3J9LHYIK5Mv_Q&_nc_ht=scontent-lga3-1.xx&oh=fcd19120eb6bc7115881a2445fe41f80&oe=5E97C311"></img>
                <h1>About {this.state.name}</h1>
                <p id="aboutP">This app was made by Peter Fiorentino at Pursuit for his Unit 4 Assessment. I didn't know what the assessment was going to be when I walked into class today, but I'm glad it was to learn how to use the YouTube API because, as a musician with videos on YouTube, this is going to help me spruce up my personal website. I'll be able to attach my own videos to my page, like I've done below.</p>
                <YouTube videoId="-4l_T-vA9ac"/>
            </div>
        )
    }
}

export default About;