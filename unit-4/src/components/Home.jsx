import React, {Component} from 'react'


class Home extends Component {
    constructor(){
        super()
        this.state ={
            searchVids: '', 
        }
    }
    
    handleChange =(e) => {
        this.setState({
            searchVids: e.target.value
        })
    }

render() {
    const {searchVids} = this.state
    return (
        <div>
<form>
    <input type="text" placeholder="Search" onChange={this.handleChange} value={searchVids} />
    <input type="submit"/>
</form>
        </div>
    )
}
}

export default Home;