import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.scss';
import About from './components/about/About';
import Achivement from './components/achivement/Achivement';
import Project from './components/project/Project';
import Event from './components/event/Event';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <div>
      <div className="navigation-panel">
          <div className="container">
              <div className="logo-container">
                  <span className="logo-text">
                      Green Fair
                      <i className="fab fa-envira leaf-icon"></i>
                      <i className="fab fa-envira leaf-icon"></i>
                  </span>
              </div>
            
          <nav>
                  <NavLink className="nav-link" to="/home">Home</NavLink>
                  <NavLink className="nav-link" to="/about">About</NavLink>
                  <NavLink className="nav-link" to="/project">Projects</NavLink>
                  <NavLink className="nav-link" to="/achivement">Achivement</NavLink>
                  <NavLink className="nav-link" to="/event">Event</NavLink>
                  <NavLink className="nav-link" to="/testimonial">Testimonial</NavLink>
                  <NavLink className="nav-link" to="/blog">Blog</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact us</NavLink>
              
          </nav>
          </div>
      </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/achivement">
              <Achivement />
            </Route>
            <Route path="/event">
              <Event />
            </Route>
            <Route path="/testimonial">
              <Testimonial />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
            <Home />
              </Route>
          </Switch>
        </div>
      </Router>
  
    </div>
  );
}

export default App;
