import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import About from './Components/About'
import Video from './Components/Video'
import Home from './Components/Home'
import NavBar from './Components/NavBar'

import { getVideoList } from './helperFunctions/apiCalls'

class App extends Component {
  state = {
    activeItem: 'home',
    search: '',
    videoList: []
  }

  handleVideoDetails = (vid) => this.setState({ vidDetails: vid })
  handleItemClick = (e, name) => this.setState({ activeItem: name })
  handleChange = (e) => this.setState({ search: e.target.value })
  handleEnter = async (e) => {
    if (e.keyCode === 13 || e.target.type === 'submit') {
      const results = await getVideoList(this.state.search)
      this.setState({ videoList: results })
    }
  }

  render() {
    const { activeItem, search, videoList } = this.state

    return (
      <Router>
        <div className="App">
          <NavBar handleClick={this.handleItemClick} activeItem={activeItem} />
        </div>
        <div className="Container">
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/videos/:id' component={Video} />
            <Route path='/'>
              <Home
                changeSearch={this.handleChange}
                enterSearch={this.handleEnter}
                search={search}
                videoList={videoList}
                changeVidDetails={this.handleVideoDetails}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
