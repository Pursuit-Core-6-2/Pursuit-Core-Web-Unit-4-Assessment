import React, {Component} from 'react'


class Home extends Component {
    constructor(){
        super()
        this.state ={
            searchVids: '', 
            resArr: [],
            // results: " ",
        }
    }
    
    handleChange =(e) => {
        this.setState({
            searchVids: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const {searchVids} = this.state
        console.log("searching for:", searchVids)
    }

    

render() {
    const {searchVids, resArr} = this.state
    return (
        <div>
<form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Search" onChange={this.handleChange} value={searchVids} />
    <input type="submit"/>
</form>
        </div>
    )
}
}

export default Home;