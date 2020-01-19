import React from 'react';
import cors from 'cors'
import HomePage from './Components/HomePage'
// import SearchBar from './Components/HomePage'
import VideoPage from './Components/VideoPage'
import AboutPage from './Components/AboutPage'
import NavBar from './Components/NavBar'
import {Route, Switch} from 'react-router-dom';
import './App.css';

// app.use(cors)

class App extends React.Component {

  render(){
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path="/"render={() => <HomePage />}/>
            </Switch>
            <Switch>
            <Route path='/video' component={VideoPage}></Route>
          </Switch>
            <Switch>
            <Route path='/about' component={AboutPage}></Route>
            </Switch>  
        </div>
      </div>
    );
  }
}

export default App;
