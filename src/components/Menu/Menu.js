import React, { Component } from 'react';
import './Menu.scss';
import { Parallax } from 'react-parallax';

export default class Menu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa Japanese — Menu';
  }

  render() {
    return (
      <div className="menu">
        <Parallax
          bgImage={require('../../assets/menu/2.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <div className="content">
              <h1>
                MENU
              </h1>
              <div className="content-row">
                <h2>Lunch Menu</h2>
                <img className="menu" src={require('../../assets/menu/lunch.jpg')} alt="lunchMenu" />
                <hr/>
                <h2>Dinner Menu</h2>
                <img className="menu" src={require('../../assets/menu/dinner.jpg')} alt="dinnerMenu" />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
