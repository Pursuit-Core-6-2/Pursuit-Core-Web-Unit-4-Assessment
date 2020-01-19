import React, { Component } from "react";
import Key from "../secrets";
import YouTube from "react-youtube";
import axios from "axios";
import Thumbnail from "./Thumbnail";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      thumbnails: [],
      Ids: []
    };
  }

  handleInput = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const inputValue = this.state.searchInput;
    this.fetchIds(inputValue);
  };

  fetchIds = async inputValue => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&key=${Key}`
      )
      .then(res => {
        let items = res.data.items;
        let id_array = [];
        items.forEach(el => {
          id_array.push(el.id.videoId);
        });
        this.setState({
          Ids: id_array
        });
        let thumbnailArr = [];
        id_array.forEach(id => {
          axios
            .get(
              `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyA76SX4-N1pVev17FzN1kH5cvkQRUzeQmo`
            )
            .then(res => {
              thumbnailArr.push(
                res.data.items[0].snippet.thumbnails.medium.url
              );
            });
          console.log(thumbnailArr);
          this.setState({
            thumbnails: thumbnailArr
          });
        });
      });
  };

  render() {
    const { handleSubmit, handleInput } = this;
    const{id, thumbnails} = this.state
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleInput}
            placeholder="Search"
            className="center-block"
          />
          <button type="submit">Search</button>
        </form>
        <YouTube videoId={this.state.Ids[0]} onReady={this._onReady} />
        <YouTube videoId={this.state.Ids[1]} onReady={this._onReady} />{" "}
        <YouTube videoId={this.state.Ids[2]} onReady={this._onReady} />{" "}
        <YouTube videoId={this.state.Ids[3]} onReady={this._onReady} />{" "}
        <YouTube videoId={this.state.Ids[4]} onReady={this._onReady} />{" "}
      </div>
    );
  }
}

export default Searchbar;
