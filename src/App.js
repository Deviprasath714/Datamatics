import React, { Component } from 'react';
import './App.css';
import Home from './home-component/home-component';
import Blog from './blog-component/blog-component';
import Logo from './logo-component/logo-component';
import Article from './article-component/article-component';
import Contact from './contact-component/contact-component';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
      return (
    <div className="App">
        <Router>
          <header className="header">
            <div className="logo">
              <Logo/>
            </div>
           <nav>
             <ul className="menu">
               <li> <NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink> </li>
               <li><NavLink to="/blog" exact activeStyle={{color:'green'}}>Blog</NavLink></li>
               <li><NavLink to="/article" exact activeStyle={{color:'green'}}>Article</NavLink></li>
               <li><NavLink to="/contact" exact activeStyle={{color:'green'}}>Contact</NavLink></li>
             </ul>
        </nav>
       </header> 
          <div className="content-section">
            <Route path="/" exact  component={Home}/>
            <Route path="/blog" exact  component={Blog}/>
            <Route path="/article" exact  component={Article}/>
            <Route path="/contact" exact  component={Contact}/>
          </div>
      </Router> 
    </div>
  );
  }
}

export default App;
