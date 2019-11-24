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

                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/lunch_omakase.jpg')} alt="lunchMenu" />
                </div>
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/lunch_menu.jpg')} alt="lunchMenu" />
                </div>
                <h2>Dinner Menu</h2>
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/omakase.jpg')} alt="dinnerMenu" />
                </div>
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/menu.jpg')} alt="dinnerMenu" />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
