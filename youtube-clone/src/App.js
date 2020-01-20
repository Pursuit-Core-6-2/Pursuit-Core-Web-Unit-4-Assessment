import React, { Component } from 'react';
import NavBar from './Components/NavBar'
import YouTube from 'react-youtube'
import { Route, Switch } from 'react-router-dom'
import {Container} from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Components/Search';
import Comments from './Components/Comments';
import About from './Components/About';

class App extends Component {
    constructor() {
        super()
        this.state = {
            comments: {}
        }
        console.log("App constructor called")
    }
    componentDidMount = () => console.log("componentDidMount")
    componentDidUpdate = () => console.log("componentDidUpdate")

    setComments = (id, comments) => {
        this.setState({
            [id]: comments
        })
    }


    render() {
        console.log("render called")


        return (
            <div className="App">
                <NavBar />
                <Container>
                    {/*  */}
                    <br />
                    <Switch>
                        <Route path='/about' render={() => <About />}/>
                        <Route path='/video/:id' 
                            render={(props) => <Comments comments={this.state[props.match.params.id]} setComments={this.setComments} videoID={props.match.params.id} />}
                        />
                        <Route path='/' render={() => <Search />}/>
                    </Switch>
                </Container>
            </div>
        );
    }

}

export default App;
