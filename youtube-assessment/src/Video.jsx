import React, {useState, useEffect} from 'react';
import Youtube from 'react-youtube';
import './Video.css';


const Video = (props) => {


	const [name, setName] = useState(null);
	const [currentComment, setCurrentComment] = useState(null);
	const [listOfComments, setListOfComments] = useState([]);


	//https://www.youtube.com/watch?v=mSzoLXlAZu4


	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleCommentChange = (e) => {
		setCurrentComment(e.target.value);
	}

	useEffect(() => {
		console.log('lol i ran')});

	 const handleFormSubmit = (e) => {
	 	console.log('running')
		e.preventDefault();
		if(!name){
			window.alert('Please fill out a name for the form!!');
		}
		else if(!currentComment){
			window.alert('Please fill out a comment for the form!!');
		}
		else{
			let tempArr = [...listOfComments];
			console.log(tempArr);
			tempArr.unshift({name: name, comment: currentComment});
			setListOfComments(tempArr);
		}
	}

	let allComments = listOfComments.map((elem) => {
		
			return (<div>
						<b>{elem.name}</b>
						<p>{elem.comment}</p>
					</div>);
		});
		return(
			<div>
				<Youtube videoId= {props.match.params.id} />
				<form onSubmit ={handleFormSubmit}> 
					<label for='name'>Name</label>
					<input placeholder='John Doe' id='name' onChange = {handleNameChange} value={name}/>
					<label for='comment'>Comment</label>
					<input placeholder = 'Enter Comment here' value={currentComment} id = 'comment' onChange= {handleCommentChange} />
					<button className = 'myButton' type ='submit' >Submit</button>
				</form>
				<div className = 'allComments'>
						{allComments}
				</div>
				</div>
			);
}


export default Video;