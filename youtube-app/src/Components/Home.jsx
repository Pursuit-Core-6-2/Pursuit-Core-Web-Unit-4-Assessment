import React, {Component} from 'react';
import Results from './Results'

class Home extends Component {
    constructor(props) {
        super(props)

    }

    render(){
    const {searchEntered, handleInput, handleSubmit} = this.props 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." onChange={handleInput}/>
                <button>Search</button>
            </form>
            <Results 
            searchEntered={searchEntered}
            />
        </div>
    )
 }
}

export default Home;