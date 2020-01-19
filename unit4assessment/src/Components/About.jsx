import React from 'react';

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
                <h1>About {this.state.name}</h1>
            </div>
        )
    }
}

export default About;