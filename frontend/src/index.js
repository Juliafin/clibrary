import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader'
import store from './store';
import './css/app.css';


console.log('afladfsdf');

ReactDOM.render(
  <AppContainer>
<Provider store={store}>
  <Layout/>
</Provider>
</AppContainer>
, 
document.getElementById('app'))


if(module.hot){
  module.hot.accept();
}