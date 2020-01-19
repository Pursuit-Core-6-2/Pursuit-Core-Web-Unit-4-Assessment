import React from 'react';
import './App.css';
// import APIKey from './Secrets'
import { Switch, Route, Link} from 'react-router-dom';
import HomePage from './Components/HomePage';
import VideoPage from './Components/VideoPage';
import AboutPage from './Components/AboutPage';


class App extends React.Component {
 
  constructor(props) {
    super(props)

   
  }


   
  
  //  displayList = (props) => {

  //   <HomePage
  //     results={this.props.results}
  //   />
  // }
  
  render() {
    return (
      <div className="App">
      
        <nav>
          <Link to="/">Home</Link> {" "}
          <Link to="/video">Video</Link> {" "}
          <Link to="/about">About</Link>  {" "}
        </nav>

        <Switch>
          <Route exact path= "/" component={HomePage}/>
          <Route path="/video" component={VideoPage}/>
          <Route path="/about" component={AboutPage}/>
           
        </Switch>

         {/* <HomePage
      results={this.props.results}
    /> */}

      </div>
    );
  }
  
}

export default App;
