import React, {Component} from 'react';
import Navbar from './navbar';


export default class Layout extends Component{
 
  render() {
    console.log('navbar', Navbar);
    return (
      <div className="main">
        <Navbar/>
        <h1>React OMASDFADSLKADF Hello !!</h1>
      </div>
    )
  }
  
} 
