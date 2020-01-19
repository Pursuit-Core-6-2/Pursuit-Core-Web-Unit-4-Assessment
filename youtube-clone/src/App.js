import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {}
        console.log("App constructor called")
    }
    componentDidMount = () => console.log("componentDidMount")
    componentDidUpdate = () => console.log("componentDidUpdate")

    render() {
        return (
            <div className="App">
                hello world
            </div>
        );
    }
}

export default App;
