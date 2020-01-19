import React from "react";
import Home from "./Components/Home";
import Videos from "./Components/Videos";
import About from "./Components/About";
import "./App.css";

//React Route
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link className='about' to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about"> {<About className="about" />} </Route>
          <Route path="/videos"> {<Videos className="videos" />} </Route>
          <Route path="/"> {<Home />} </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
