import keys from '../secrets'
import axios from 'axios'

export const getVideoList = async (search) => {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${keys}`;
    const data = await axios.get(searchUrl)
    return data.data.items;
}

export const getVideoDetails = async (id) => {
    const videoIdUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${keys}`
    const data = await axios.get(videoIdUrl)
    return data.data
}