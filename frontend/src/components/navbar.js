import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Navbar extends Component {


}


const mapStateToProps = (state) => {
  return {
    navbarOptions: state.navbarOptions
  }
}


export default connect(mapStateToProps)(Navbar);