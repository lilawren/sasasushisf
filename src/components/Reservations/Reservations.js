import React, { Component } from 'react';
import './Reservations.scss';
import { Parallax } from 'react-parallax';

export default class Reservations extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa Japanese — Reservations';
  }

  render() {
    return (
      <div className="reservations">
        <Parallax
          bgImage={require('../../assets/reservations/1.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <div className="content">
              <h1>
                RESERVATIONS
              </h1>
              <div className="content-row">
              <iframe id="yelp-reservations-widget" frameBorder="0" width="100%" height="88" src="//www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco/widget?orientation=horizontal&color-scheme=light" > <a href='https://www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco'>Reserve at Sasa Japanese Restaurant on Yelp</a> </iframe>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
