import React from 'react';
import Results from './Results'

const Home = (props) => {
    const {searchEntered, resultsArr, selectedVid, selectedVidId, handleInput, handleSubmit, handleClick} = props
    if (!selectedVid) {
    return (
        <div>
            <form className="homeForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." onChange={handleInput}/>
                <button>Search</button>
            </form>
            <Results 
            searchEntered={searchEntered}
            resultsArr={resultsArr}
            handleClick={handleClick}
            selectedVid={selectedVid}
            selectedVidId={selectedVidId}
            />
        </div>
    )
    } else {
        return (
            <Results 
            searchEntered={searchEntered}
            resultsArr={resultsArr}
            handleClick={handleClick}
            selectedVid={selectedVid}
            selectedVidId={selectedVidId}
            />
        )
    }
 }


export default Home;