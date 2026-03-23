import React, { Component } from 'react';
import './LocationPage.scss';
import { Parallax } from 'react-parallax';

export default class LocationPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa Japanese — Location';
  }

  render() {
    return (
      <div className="location">
        <Parallax
          bgImage={require('../../assets/location/2.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <div className="content">
              <h1>
                LOCATION
              </h1>
              <div className="content-row">
                <div className="address">
                  <div>Japan Center East Mall (2nd floor, above Daiso)</div>
                  <div>22 Peace Plz</div>
                  <div>Ste 530</div>
                  <div>San Francisco, CA 94115</div>
                  <div>(415) 683-9674</div>
                </div>
                <h3>Hours</h3>
                <div>Open daily</div>
                <div>12–2 PM</div>
                <div>5:30–9 PM</div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
