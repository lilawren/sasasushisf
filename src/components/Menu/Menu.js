import React, { Component } from 'react';
import './Menu.scss';
import { Parallax } from 'react-parallax';

export default class Menu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa sushi — Menu';
  }

  render() {
    return (
      <div className="menu">
        <Parallax
          bgImage={require('../../assets/home/rock.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <div className="content">
              <h1>
                MENU
              </h1>
              <div className="content-row">
              <div className="address">
                <div>810 Van Ness Ave.</div>
                <div>San Francisco, CA 94109 </div>
                <div>(415) 829-8291</div>
              </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
