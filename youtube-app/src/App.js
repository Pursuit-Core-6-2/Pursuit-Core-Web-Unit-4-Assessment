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
        resultsArr: []
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

  handleSearch = async () => {
    let searchQuery = this.state.input
    console.log(searchQuery)
    const {data:{items}} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=8&order=relevance&key=${API_KEY}`)
    console.log(items)
    this.setState({
      resultsArr: items
    })
  }

  handleClick = (event) => {
    console.log('event inner text', event.target.innerText)
    console.log('video id', event.target.id)
    
  }


  render(){
    console.log(this.state)
    const {searchEntered, resultsArr} = this.state
    const {handleInput, handleSubmit, handleClick } = this
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
            resultsArr= {resultsArr}
            handleInput= {handleInput}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
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
