import React, {Component} from 'react';
import Navbar from './navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import './../css/layout.css';
export default class Layout extends Component{
 
  render() {

    console.log('navbar', Navbar);
    return (
      <Router>
        <div className="main">
          <Navbar/>
          <h1>React OMASDFADSLKADF Hello !!</h1>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

        </div>
      </Router>
    )
  }
  
} 
