import React, {Component} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import './App.css';
import API_KEY from './Components/secrets'
import Home from './Components/Home'
import About from './Components/About'
import axios from 'axios'
import VideoPage from './Components/VideoPage'


class App extends Component {
  constructor(){
    super()
      this.state = {
        searchEntered: false,
        input:'',
        resultsArr: [],
        selectedVid: false,
        selectedVidId: ''
      }
  }

  handleInput = (event) => {
    let search = event.target.value
    this.setState({
      input: search
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      searchEntered: true
    })
    this.handleSearch()
  }

  handleSearch = async () => {
    let searchQuery = this.state.input
    const {data:{items}} = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=8&order=relevance&key=${API_KEY}`)
    console.log(items)
    this.setState({
      resultsArr: items
    })
  }

  handleClick = (event) => {
    let videoId = event.target.id
    this.setState({
      selectedVid: true,
      selectedVidId: videoId
    })
  }


  render(){
    console.log(this.state)
    const {searchEntered, resultsArr, selectedVid, selectedVidId} = this.state
    const {handleInput, handleSubmit, handleClick } = this
  return (
    <div className="App">
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
          <Route path="/about" component={About}>
          </Route>
          <Route path="/video/:id" component={VideoPage}>
          </Route>
          <Route exact path="/">
            <Home 
            searchEntered = {searchEntered}
            resultsArr= {resultsArr}
            handleInput= {handleInput}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            selectedVid={selectedVid}
            selectedVidId={selectedVidId}
            />
          </Route>
          </div>
        </Switch>
      </div>
    </div>
  );
  }
}

export default App;
