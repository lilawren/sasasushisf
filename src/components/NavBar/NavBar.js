import React, { Component } from 'react';
import './NavBar.scss';

import { Link } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="logo-link" to='/'>
          <img src={require('../../assets/sasa.png')} alt="logo"/>
        </Link>
        <div className="links">
          <Link className="mobile-hidden" to='/'>HOME</Link>
          <Link to='/location'>LOCATION</Link>
          <Link to='/menu'>MENU</Link>
          <Link to='/reservations'>RESERVATIONS</Link>
        </div>
      </nav>
    );
  }
}
