import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import './../../public/assets/css/navbar.css';

class Navbar extends Component {
  render () {
    const navbarItems = this.props.navbarOptions.map((item) => {return (<Icon size="large" name={item[1]}></Icon>)})

    console.log(navbarItems, 'navbar items')
    return (
            <nav className="navbar">
              {navbarItems}
            </nav>)

  }

}


 const mapStateToProps = (state) => {
  return {
    navbarOptions: state.navbarOptions
  }
}


export default connect(mapStateToProps)(Navbar);