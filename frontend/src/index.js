import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import {Provider} from 'react-redux';
import store from './store';
import './../public/assets/css/app.css';


console.log('afladfsdf')
ReactDOM.render(
<Provider store={store}>
  <Layout/>
</Provider>, 
document.getElementById('app'))


if(module.hot){
  module.hot.accept();
}