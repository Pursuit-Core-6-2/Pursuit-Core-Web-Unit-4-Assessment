/*
JOSEPH P. PASAOA
Homepage Component | YouTube Abbreviated | Unit 4 Assessment
*/


/* IMPORTS */
    // external
import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

    // local
import myKey from '../secrets.js';
import './Homepage.css';
import VideoCard from '../components/VideoCard';

const {
  processInput
} = require('../helpers/globalHelp.jsx');




/* COMPONENT + EXPORT */
export default class Homepage extends Component {
  state = {
    searchTxt: "",
    errorMessage: "",
    results: [],
    isBeginning: true
  }
  hardData ={
    msgWelcome: <p className="result-response">Search for videos above!</p>,
    msgEmpty: <p className="result-response">Sorry, no search results found. Try your search again above.</p>
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { pass, payload } = processInput(this.state.searchTxt, "search terms");
    if (!pass) {
      this.setState({
          errorMessage: payload
      });
    } else {
      this.getSearchResults(payload);
    }
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({ searchTxt: "" });
  }


  getSearchResults = async (search) => {
    const baseUrl = `https://www.googleapis.com/youtube/v3/search`;
    const prepParams = `?part=snippet&key=${myKey}&maxResults=8`;
    const prefixSearch = `&q=`;
    const response = await axios.get(
      baseUrl +
      prepParams +
      prefixSearch +
      search
    );
    // console.log(response.data.items);
    this.setState({
        errorMessage: "",
        results: response.data.items,
        isBeginning: false
    });
  }


  render() {
    const { searchTxt, errorMessage, results, isBeginning } = this.state;
    const { msgWelcome, msgEmpty } = this.hardData;

    let listResults = null;

    if (results.length) {
      listResults = results.map(result => {
          const videoId = result.id.videoId;
          const title = result.snippet.title;
          const desc = result.snippet.description;
          const thumbUrl = result.snippet.thumbnails.high.url; // width: 480px h: 360px

          return (
            <VideoCard 
              key={videoId} 
              videoId={videoId} 
              title={title} 
              desc={desc} 
              thumbUrl={thumbUrl} 
            />
          );
      });
    }

    let showing = null;
    if (isBeginning) {
      showing = msgWelcome;
    } else if (!results.length) {
      showing = msgEmpty;
    } else {
      showing = listResults;
    }

    return(
      <div className="stage">
        <form onSubmit={this.handleSubmit} className="form-homesearch">
          <input 
            type="text" 
            name="searchTxt" 
            className="input-search" 
            value={searchTxt} 
            onChange={this.handleChange} 
            placeholder="Search..." 
            required 
          />
          <button className="btn-search">Search</button>
          <button className="btn-clear" onClick={this.handleClear}>Clear</button>
        </form>

        <div className="msg-error">{errorMessage}</div>

        <div className="results-grid">
          {showing}
        </div>

      </div>
    );
  }
}
