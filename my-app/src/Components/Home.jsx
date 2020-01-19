import React, { Component } from "react";
import Searchbar from './Searchbar'

class Home extends Component {
    
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Searchbar thumbnails='Maliq' />
      </div>
    );
  }
}

export default Home;
