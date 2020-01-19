import React from 'react';

const About = () => {
    return(
        <div className="About">
            <h1 className="About-title"> Welcome to Secret Screening! </h1>
            <img src={require("./Secret-Screening-Logo.png")} />
            <p className="About-body"> Finally a place to find any video you'd like to see - and some that you don't! Just enter a topic into the search bar and be AMAZED as upwards of 8 videos are displayed for you to choose from! Clicking on one of the thumbnails will take you to the video. So brace yourself for entertainment like you've never experienced before - because you'll always have a ticket for this Secret Screening! </p>
        </div>
    )
}

export default About;