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
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/menu1.jpg')} alt="lunchMenu" />
                </div>
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/menu2.jpg')} alt="dinnerMenu" />
                </div>
                <h2>Sushi Menu</h2>
                <div className="menu-container">
                  <img className="menu" src={require('../../assets/menu/sushi.jpg')} alt="dinnerMenu" />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
