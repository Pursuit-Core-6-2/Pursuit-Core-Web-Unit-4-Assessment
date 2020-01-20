import React from 'react'
import VideoPlayer from '../../Components/Video';
import './videopage.css'

class VideoPage extends React.Component {

    constructor() {
        super()
        this.state = {
            videInfo: [],
            name: '',
            comment: ''
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.videInfo.length !== prevState.videInfo) {
            this.setStorage()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { videInfo, name, comment } = this.state;
        const newItem = { name, comment };
        this.setState({
            videInfo: [...videInfo, newItem],
            name: '',
            comment: ''
        });

    };

    setStorage() {
        localStorage.setItem('videInfo', JSON.stringify(this.state.videInfo))
    }

    handleInput = e => {
        const value = e.target.value;
        this.setState({
            ...this.prevState,
            [e.target.name]: value
        });
    };

    render() {
        console.log(this.state);
        return (
            <div className='videoPage'>
                <div className='videoPlayer'>
                    <VideoPlayer videoId={this.props.match.params.id} />
                </div>
                <form className='videoForm' onSubmit={this.handleSubmit}>
                    <div className='inputs'>
                        <label htmlFor="name">Name</label> <br />
                        <input name='name' type="text" placeholder=' Name..' onChange={this.handleInput} required className='inputBar' />
                    </div>
                    <div className='inputs'>
                        <label htmlFor="comment">Comment</label> <br />
                        <input name='comment' type="text" placeholder='  ...' onChange={this.handleInput} required className='inputBar' />
                    </div>

                    <button>Submit</button>
                </form>

                {
                    <ul>
                        {
                            JSON.parse(localStorage.getItem('videInfo')).map(el => {
                                return (
                                    <li>
                                        <p className='username'>{el.name}</p>
                                        <p className='comment'>{el.comment}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>

                }
            </div>
        )
    }
}

export default VideoPage