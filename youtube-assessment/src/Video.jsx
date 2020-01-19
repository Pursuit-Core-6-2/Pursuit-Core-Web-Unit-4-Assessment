import React from 'react';
import Youtube from 'react-youtube';
import './Video.css';


class Video extends React.Component{
	constructor(){
		super();
		this.state = {
			name: null,
			currentComment: null,
			listOfComments: []
		}
	};

	//https://www.youtube.com/watch?v=mSzoLXlAZu4


	handleNameChange = (e) => {
		this.setState({
			name: e.target.value
		});
	}

	handleCommentChange = (e) => {
		this.setState({
			currentComment: e.target.value
		});
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		if(!this.state.name){
			window.alert('Please fill out a name for the form!!');
		}
		else if(!this.state.currentComment){
			window.alert('Please fill out a comment for the form!!');
		}
		else{
			let tempArr = this.state.listOfComments;
			tempArr.unshift({name: this.state.name, comment: this.state.currentComment});
			this.setState({
				listOfComments: tempArr
			})
		}
	}



	render(){
		let allComments = this.state.listOfComments.map((elem) => {
			return (<div>
						<b>{elem.name}</b>
						<p>{elem.comment}</p>
					</div>)
		});
		return(
			<div>
				<Youtube videoId= {this.props.match.params.id} />
				<form onSubmit ={this.handleFormSubmit}>
					<label for='name'>Name</label>
					<input placeholder='John Doe' id='name' onChange = {this.handleNameChange}/>
					<label for='comment'>Comment</label>
					<input placeholder = 'Enter Comment here' id = 'comment' onChange= {this.handleCommentChange} />
					<button className = 'myButton' type ='submit' >Submit</button>
				</form>
				<div className = 'allComments'>
						{allComments}
				</div>
				</div>
			);
	}
}


export default Video;