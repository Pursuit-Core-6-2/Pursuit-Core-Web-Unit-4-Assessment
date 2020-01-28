import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Comments from './Components/Comments';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const [comment, setComment] = useState({})

    const setComments = (id, comments) => {
        let obj = {...comment}
        obj[id] = comments
        setComment(obj)
    }


    return (
        <div className="App">
            <NavBar />
            <Container>
                <br />
                <Switch>
                    <Route path='/about' render={() => <About />}/>
                    <Route path='/video/:id' 
                        render={(props) => <Comments comments={comment[props.match.params.id]} setComments={setComments} videoID={props.match.params.id} />}
                    />
                    <Route path='/' render={() => <Search />}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;
