import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import './../css/navbar.css';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render () {
    const navbarItems = this.props.navbarOptions.map((item, index) => {return (
    <Link key={index} to={`/${item[0].toLowerCase()}`}>
      <Icon size="big" inverted={true} key={index} name={item[1]}>
      </Icon>
    </Link>
  )})

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