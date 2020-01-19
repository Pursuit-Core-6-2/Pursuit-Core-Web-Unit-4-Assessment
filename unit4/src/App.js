import React from 'react'
import { Route, Link } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          {"  "}
          <Link to="/about">About</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    )
  }
}

export default App;
