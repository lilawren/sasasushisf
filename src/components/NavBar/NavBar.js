import React, { Component } from 'react';
import './NavBar.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="logo-link" to='/'>
          <img src="https://theultralinx.com/.image/t_share/MTI5MDI1MjE1MzQ5OTI2NTMx/163.jpg" alt="logo"/>
        </Link>
        <div className="links">
          <Link to='/'>HOME</Link>
          <Link to='/location'>LOCATION</Link>
          <Link to='/menu'>MENU</Link>
          <Link to='/reservations'>RESERVATIONS</Link>
        </div>
      </nav>
    );
  }
}
