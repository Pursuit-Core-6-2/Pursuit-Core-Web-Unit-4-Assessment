import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import API_KEY from './Components/secrets'
import Home from './Components/Home'
import About from './Components/About'
import axios from 'axios'


class App extends Component {
  constructor(){
    super()
      this.state = {
        searchEntered: false,
        input:'',
        results: []
      }
  }

  handleInput = (event) => {
    console.log('input')
    let search = event.target.value
    this.setState({
      input: search
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('form submitted')
    this.setState({
      searchEntered: true
    })
    this.handleSearch()
  }

  handleSearch = () => {
    let searchQuery = this.state.input
    console.log(searchQuery)
  }



  render(){
    console.log(this.state)
    const {searchEntered } = this.state
    const {handleInput, handleSubmit } = this
  return (
    <div className="App">
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              Youtube
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <div className="body">
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Home 
            searchEntered = {searchEntered}
            handleInput= {handleInput}
            handleSubmit={handleSubmit}
            />
          </Route>
          </div>
        </Switch>
      </div>
    </Router>
    </div>
  );
  }
}

export default App;
