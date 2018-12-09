import React, { Component } from 'react';
import './Home.scss';
import { Parallax } from 'react-parallax';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Parallax
          bgImage={require('../../assets/home/rock.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <h1>
              JAPAN TOWN'S PREMIER SUSHI RESTAURANT
            </h1>
          </div>
        </Parallax>

        <div className="content-row">
          <h2>Sasa is Japantown's premier sushi restaurant</h2>
          <div>with ingredients sourced from Japan and Canada</div>
        </div>

        <Parallax
          bgImage={require('../../assets/home/rock.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero small">
            <h1>
              JAPAN TOWN'S PREMIER SUSHI RESTAURANT
            </h1>
          </div>
        </Parallax>

      </div>
    );
  }
}
