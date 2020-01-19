/*
JOSEPH P. PASAOA
Homepage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';

    // local
const {
  processInput
} = require('../helpers/globalHelp.jsx');
// import './Homepage.css';



/* COMPONENT + EXPORT */
export default class Homepage extends Component {
  state = {
    searchTxt: "",
    results: [],
    isBeginning: true
  }
  hardData ={
    msgWelcome: <p>Search for videos above!</p>,
    msgEmpty: <p>Sorry, no search results found. Try your search again above.</p>
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    processInput(this.state.searchTxt, "HIT");
  }

  render() {
    const { searchTxt, results, isBeginning } = this.state;
    const { msgWelcome, msgEmpty } = this.hardData;

    let listResults = null;


    let showing = null;
    if (isBeginning) {
      showing = msgWelcome;
    } else if (!results.length) {
      showing = msgEmpty;
    } else {
      showing = listResults;
    }

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchTxt" className="input-search" value={searchTxt} onChange={this.handleChange} />
          <button className="btn-search">Search</button>
        </form>

        {showing}

      </div>
    );
  }
}
