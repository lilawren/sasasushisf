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
          <a href="https://www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco-2" alt="Reserve on yelp"
            title="Reserve on yelp"
            style={{
              "text-decoration": "none",
            }}>RESERVATIONS</a>
        </div>
      </nav>
    );
  }
}
