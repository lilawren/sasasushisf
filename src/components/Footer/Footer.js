import React, { Component } from 'react';
import './Footer.scss';

import yelp from '../../assets/footer/yelp.svg';
import ig from '../../assets/footer/instagram.svg';
import fb from '../../assets/footer/facebook.svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="address">
            <div>Japan Center East Mall (2nd floor, above Daiso)</div>
            <div>22 Peace Plz</div>
            <div>Ste 530</div>
            <div>San Francisco, CA 94115</div>
            <div>(415) 683-9674</div>
          </div>
          <div className="hours">
            <div>
              <div>Monday - Closed</div>
              <br />
              <div>Tuesday-Thursday</div>
              <div>12:00pm - 2:00pm</div>
              <div>5:30pm-9:30pm</div>
              <br />
              <div>Friday</div>
              <div>12:00pm - 2:00pm</div>
              <div>5:30pm-10:00pm</div>
            </div>
            <div>
              <div>Saturday</div>
              <div>12:00pm - 2:30pm</div>
              <div>5:30pm-10:00pm</div>
              <br />
              <div>Sunday</div>
              <div>12:00pm - 2:30pm</div>
              <div>5:00pm-9:30pm</div>
              <br />
              <div><i>Site created by <a href="http://www.lalicode.com" target="_blank">Lawrence Li</a></i></div>
            </div>
          </div>

        </div>
        <div className="social">
          <a href='https://www.yelp.com/biz/sasa-san-francisco' target="_blank"><img src={yelp} /></a>
          <a href='https://www.instagram.com/sasa_sanfrancisco' target="_blank"><img src={ig} /></a>
          <a href='https://www.facebook.com/pages/category/Japanese-Restaurant/Sasa-Japanese-Restaurant-1275103022630839/' target="_blank"><img src={fb} /></a>
        </div>
      </div>
    );
  }
}
