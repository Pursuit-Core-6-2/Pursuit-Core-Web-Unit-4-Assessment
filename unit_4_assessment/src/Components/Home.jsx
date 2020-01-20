import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
// import Video from "./Video";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            searchTerm: "",
            videoContent: []
        }
    }


    handleSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { searchTerm, videoContent } = this.state;
        console.log("about to search videos for", searchTerm);
        try {
            let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchTerm}&safeSearch=strict&type=video&key=${API_KEY}`;

            let res = await axios.get(url);
            //console.log("res:", res);
            console.log("res.data.items:", res.data.items);
            res = res.data.items;
            console.log(res.snippet)
            for(let i = 0; i < res.length; i++) {
                videoContent.push(res[i]);
            }
            this.setState({
                videoContent: videoContent
            });

            console.log("videoContent:", videoContent);

        } catch(err) {
            console.log("Error:", err);
        }
    }


        render() {
            const { searchTerm, videoContent } = this.state;
          
            return(
                <div className="homeWrapper">
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Search..."
                            onChange={this.handleSearchTerm}
                            value={searchTerm}
                        />
                        <input type="submit" />
                    </form>

                    <div className="wrapper">{
                        videoContent.map(element => {
                            return(
                                <div className="youtubeThumbnailDivs">
                                    <div>
                                    <Link to={`/video/${element.id.videoId}`}>
                                        <img src={element.snippet.thumbnails.default.url} />
                                    </Link>
                                    </div>
                                    <div>
                                        <p className="thumbnailTitle"><strong>{element.snippet.title}</strong></p>
                                    </div>
                                </div>
                            );
                        })
                    }</div>
                    
                </div>
            );
        }
}

export default Home;