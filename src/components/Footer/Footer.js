import React, { Component } from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import yelp from '../../assets/footer/yelp.svg';
import ig from '../../assets/footer/instagram.svg';
import fb from '../../assets/footer/facebook.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="address">
            <div>22 Peace Plz</div>
            <div>Ste 530</div>
            <div>San Francisco, CA 94115</div>
            <div>(415) 683-9673</div>
          </div>
          <div className="hours">
            <div>Tuesday-Sunday</div>
            <div>12:00pm - 2:30pm (lunch)</div>
            <div>5:00pm-9:30pm (dinner)</div>
            <div><i>Site created by <a href="http://www.lalicode.com" target="_blank">Lawrence Li</a></i></div>
          </div>
        </div>
        <div className="social">
          <a href='https://www.yelp.com/biz/sasa-san-francisco' target="_blank"><img src={yelp} /></a>
          <Link to='/'><img src={ig} /></Link>
          <Link to='/'><img src={fb} /></Link>
        </div>
      </div>
    );
  }
}
