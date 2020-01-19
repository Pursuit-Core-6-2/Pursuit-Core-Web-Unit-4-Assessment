import keys from '../secrets'
import axios from 'axios'

export const getVideoList = async (search) => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${keys}`;
    console.log(searchUrl);

    const data = await axios.get(searchUrl)
    console.log(data)

    // console.log(data.data.items)

    return data.data.items;
}

export const getVideoDetails = async (id) => {
    const videoIdUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${keys}`
    console.log('Getting video')

    const data = await axios.get(videoIdUrl)

    // console.log(data.data)

    return data.data
}