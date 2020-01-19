/*
JOSEPH P. PASAOA
Homepage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import './Homepage.css';


/* COMPONENT + EXPORT */
export default class Homepage extends Component {
  state = {
    searchTxt: ""
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hit");
  }

  render() {
    const { searchTxt } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTxt" className="input-search" value={searchTxt} onChange={this.handleChange} />
          <button className="btn-search">Search</button>
        </form>
        <p>Copy that.</p>
        
      </div>
    );
  }
}
