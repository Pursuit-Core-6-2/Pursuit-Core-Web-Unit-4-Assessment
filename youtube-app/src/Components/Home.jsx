import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Input, Button } from "semantic-ui-react";
import { getVideoDetails } from "../helperFunctions/apiCalls";

const Home = props => {
  const history = useHistory();
  const openVideo = async id => {
    const data = await getVideoDetails(id);
    props.changeVidDetails(data.data);
    history.push(`/videos/${id}`);
  };

  return (
    <div>
      <img src="https://firebasestorage.googleapis.com/v0/b/portfoliosite-f91b2.appspot.com/o/YoutubeApp.gif?alt=media&token=7e334c9a-def4-4099-bd7c-5ba35f735722" />
      <Input
        action={<Button onClick={e => props.enterSearch(e)}>Search</Button>}
        placeholder="Search..."
        onChange={e => props.changeSearch(e)}
        onKeyUp={e => props.enterSearch(e)}
        className="SearchBar"
      />
      <div className="VideosContainer">
        {props.videoList.map(vid => {
          return (
            <div
              key={vid.id.videoId}
              id={vid.id.videoId}
              className="VideoDetails"
            >
              <img
                src={vid.snippet.thumbnails.medium.url}
                onClick={() => openVideo(vid.id.videoId)}
                className="VideoThumbnail"
                alt="Thumbnail"
              />
              <h4 onClick={() => openVideo(vid.id.videoId)}>
                {vid.snippet.title}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export default withRouter(Home)
export default Home;
