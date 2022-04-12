import React from 'react';
import './App.css';
// import APIKey from './Secrets'
import { Switch, Route, Link} from 'react-router-dom';
import HomePage from './Components/HomePage';
import VideoPage from './Components/VideoPage';
import AboutPage from './Components/AboutPage';


class App extends React.Component {
 
  render() {
    return (
      <div className="App">
      
        <nav className='navbar'>
          <Link to='/Youtube'>Youtube</Link> {" "}
          <Link to="/">Home</Link> {" "}
          {/* <Link to="/video">Video</Link> {" "} */}
          <Link to="/about">About</Link>  
          
        </nav>

        <Switch>
          <Route exact path= "/" component={HomePage}/>
          <Route path="/video/:id" component={VideoPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route></Route>
           
        </Switch>

      

      </div>
    );
  }
  
}

export default App;
