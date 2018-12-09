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
            <div>810 Van Ness Ave.</div>
            <div>San Francisco, CA 94109 </div>
            <div>(415) 829-8291</div>
          </div>
          <div className="hours">
            <div>Tuesday-Sunday</div>
            <div>6:00pm-10:00pm (dinner only)</div>
            <div><i>Site created by <a href="http://www.lalicode.com" target="_blank">Lawrence Li</a></i></div>
          </div>
        </div>
        <div className="social">
          <Link to='/'><img src={yelp} /></Link>
          <Link to='/'><img src={ig} /></Link>
          <Link to='/'><img src={fb} /></Link>
        </div>
      </div>
    );
  }
}
