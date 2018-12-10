import React, { Component } from 'react';
import './Home.scss';
import { Parallax } from 'react-parallax';

import { Link } from 'react-router-dom';

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = 'Sasa sushi — Home';
  }

  render() {
    return (
      <div className="home">
        <Parallax
          bgImage={require('../../assets/home/food/2.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            {/* <h1>
              JAPAN TOWN'S PREMIER SUSHI RESTAURANT
            </h1> */}
          </div>
        </Parallax>

        <div className="content-row">
          <h2>Sasa offers an innovative Japanese Culinary Experince</h2>
          <div>based on traditional kaiseki cooking techniques with American influences</div>
        </div>

        {/* <Parallax
          bgImage={require('../../assets/home/rock.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero small">
            <h1>
              MOUTH WATERING
            </h1>
          </div>
        </Parallax>

        <div className="content-row">
          <h2>Sasa is Japantown's premier sushi restaurant</h2>
          <div>with ingredients sourced from Japan and Canada</div>
          <div className="image-grid">
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
            <div className="item mobile-hidden" style={{backgroundImage: `url(${require('../../assets/home/2.jpg')})`}} />
          </div>
        </div> */}

          <Parallax
          bgImage={require('../../assets/home/food/1.jpg')}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero small">
            <h1>
              PEDIGREED CHEFS
            </h1>
          </div>
        </Parallax>

        <div className="content-row">
          <h2>We are passionate about creating a innovative Japanese culinary experience</h2>
          <div className="chef-grid">
            <div className="chef">
              <img className="portrait" src={require('../../assets/home/chefs/chef_weida.jpg')}/>
              {/* <div className="portrait" style={{backgroundImage: `url(${require('../../assets/home/chefs/weida.jpg')})`}} /> */}
              <h4>OWNER CHEF WEIDA (DAVID)</h4>
              <div>
                "Nigiri means hold, each piece must be made with the chef's hand. Every single piece of sushi has power and soul in the rice and fish"
              </div>
            </div>
            <div className="chef">
              <img className="portrait" src={require('../../assets/home/chefs/chef_jing.jpg')}/>
              <h4>HEAD CHEF JING</h4>
              <div>
                "I am passionate about bringing out the intricacies of umami in Japanese cuisine."
              </div>
            </div>
          </div>
         <iframe id="yelp-reservations-widget" frameBorder="0" width="100%" height="88" src="//www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco/widget?orientation=horizontal&color-scheme=light" > <a href='https://www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco'>Reserve at Sasa Japanese Restaurant on Yelp</a> </iframe>
        </div>

      </div>
    );
  }
}
