import React, {Component} from 'react';
import Navbar from './navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
          <h1>React Hello !!</h1>
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          </Switch>

        </div>
      </Router>
    )
  }
  
} 
