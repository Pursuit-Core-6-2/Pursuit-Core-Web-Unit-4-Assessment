import React, { isValidElement } from 'react';
import API_KEY from '../secrets';
import axios from 'axios';



class Home extends React.Component{
   constructor() {
      super()
      this.state = {
         field:" ",
         images:{},
         para:"fgr"
      }
   }
   handleSearch = async (event) => {
      this.setState({
         field: event.target.value
      })
   }
   handleSubmit = async (event) =>  {
      event.preventDefault()
      let searchField = this.state.field.split(" ")
      let vidImg= {}
      //console.log ("Searching videos for" + searchField)

      try{
         const params = `${searchField}&key=${API_KEY}`
         const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${params}`)
         let videos = response.data.items 
         videos.map((video) => {
            vidImg[video.snippet.title] ={url: video.snippet.thumbnails.medium.url, id: video.id.videoId};
            this.setState({
               images: vidImg,
               para:'No Search Results. Search for videos above!'
            })
         })
      }catch (err) {
         console.log(err)
      }
   }

 
render () {
   return(
   <div>
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search videos" onChange={this.handleSearch}/>
          <input type="submit" value="search"></input>
      </form>
      <p>{this.state.para}</p>
      {/* <div id="thumbnails">
         <Images pics={this.state.images}/>
      </div> */}
   </div>
   ) 
}
}

 export default Home;