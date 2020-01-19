import React from 'react';
import react  from 'react-youtube'

class VideoPage extends React.Component {
    constructor() {
        super()
        

        this.state = {
            name:'',
            comment:'',
        }
    }

    handleInput = (e) => {
        this.setState({
          name: e.target.value,
          comment: e.target.value 
        })
    }


    handleForm = () => {

    }

    render() {
        return(
            <div>
                <form> 
                    <input type='text'/>
                    <br></br>
                    <input type='text'/>
                    <br></br>
                    <input type='submit'/>

                </form>
            </div>
        )
    }
}

export default VideoPage;