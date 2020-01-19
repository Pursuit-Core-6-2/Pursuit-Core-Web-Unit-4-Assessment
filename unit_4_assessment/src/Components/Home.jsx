import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../secrets";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            searchTerm: "",
            videoIds: [],
            results: [],
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
        const { searchTerm, videoIds, results, videoContent } = this.state;
        console.log("about to search videos for", searchTerm);
        try {
            let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchTerm}&safeSearch=strict&type=video&key=${API_KEY}`;

            let res = await axios.get(url);
            console.log("res:", res.data.items);
            res = res.data.items;
            for(let i = 0; i < res.length; i++) {
                videoIds.push(res[i].id.videoId);
                videoContent.push(res[i]);
            }
            console.log("videoContent", videoContent);
            this.setState({
                videoIds: videoIds,
                videoContent: videoContent
            })
            console.log("videoIds", videoIds);

            for(let i = 0; i < videoIds.length; i++) {
                url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=8&q=${searchTerm}&safeSearch=strict&type=video&id=` + `${videoIds[i]}` + `&key=${API_KEY}`;
                let res = await axios.get(url);
                results.push(res);
            }
            console.log("results:", results);

        } catch(err) {
            console.log("Error:", err);
        }
    }

    _onReady(event) {
        event.target.pauseVideo();
    }


        render() {
            const { searchTerm, videoIds, results, videoContent } = this.state;
            // console.log("results", results);
            // console.log("videoContent", videoContent);
            const opts = {
                height: '150',
                width: '300',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 0
                }
            };

            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Search..."
                            onChange={this.handleSearchTerm}
                            value={searchTerm}
                        />
                        <input type="submit" />
                    </form>
                    
                        <div id="youtubeVideosWrapper">
                            {videoIds.map(element => {
                                return(                           
                                    <div className="youtubeVideoDivs">
                                        <YouTube
                                            className="youtubeElement"
                                            videoId={element} 
                                            id={element}                       
                                            opts={opts}               
                                            onReady={this._onReady}
                                            propToPass={element}
                                        />
                                    </div>);
                            })}
                        </div>
                    
                </div>
            );
        }
}

export default Home;