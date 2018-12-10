import React, { Component } from 'react';
import './LocationPage.scss';
import { Parallax } from 'react-parallax';

export default class LocationPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa sushi — Location';
  }

  render() {
    return (
      <div className="location">
        <Parallax
          bgImage={require('../../assets/location/1.jpg')}
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
                  <div>Japantown East Mall (2nd floor, above Daiso)</div>
                  <div>22 Peace Plz</div>
                  <div>Ste 530</div>
                  <div>San Francisco, CA 94115</div>
                  <div>(415) 683-9673</div>
                </div>
                <div>Open Tuesday-Sunday</div>
                <div>12:00pm - 2:30pm (lunch)</div>
                <div>5:00pm-9:30pm (dinner)</div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
