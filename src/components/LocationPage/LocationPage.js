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
                <div>Monday - Closed</div>
                <br />
                <div>Tuesday-Thursday</div>
                <div>12:00pm - 2:00pm</div>
                <div>5:30pm-9:30pm</div>
                <br />

                <div>Friday</div>
                <div>12:00pm - 2:00pm</div>
                <div>5:30pm-10:00pm</div>
                <br />

                <div>Saturday</div>
                <div>12:00pm - 2:30pm</div>
                <div>5:30pm-10:00pm</div>
                <br />

                <div>Sunday</div>
                <div>12:00pm - 2:30pm</div>
                <div>5:00pm-9:30pm</div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
