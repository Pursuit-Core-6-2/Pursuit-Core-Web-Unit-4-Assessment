import React from 'react';

// const SearchResults = (props) => {
    
//   props.results.map((result, index)  => {
//     //   console.log('check', list)
//         return 
//     })
    
//     return(
//         <div className='search-list'>
//           <ul>
//             {  props.results.map((result, index)  => {
//                 return <li key={index}>{result}</li>
//     }) }
//           </ul>
//         </div>
//     )
// }


class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            result: {}
        }
    }

    // componentDidMount(){
    //     const{ match: { params } } = this.props
    //   const searchId = this.props.match.params
    //   console.log(this.props.match.params.id)  
    // }

    render() {
        return(
            <div></div>
        ) 
    }
}



export default SearchResults;