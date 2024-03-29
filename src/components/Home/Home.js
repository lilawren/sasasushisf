import React, { Component } from "react";
import "./Home.scss";
import { Parallax } from "react-parallax";

import Banner from "./Banner";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Sasa Japanese — Home";
  }

  render() {
    return (
      <div className="home">
        <Banner />

        <div className="video-borders">
          <iframe
            src="https://player.vimeo.com/video/820394195?h=5b3d38e056&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Welcome to Sasa!">
          </iframe>
        </div>

        <div className="content-row">
          <h2>Sasa offers an innovative Japanese Culinary Experince</h2>
          <div>
            based on traditional kaiseki cooking techniques with American
            influences
          </div>
        </div>

        <Parallax
          bgImage={require("../../assets/home/backgrounds/3.jpg")}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero small">
            <h1>MOUTH WATERING</h1>
          </div>
        </Parallax>

        <div className="content-row">
          {/* <h2>Sasa is Japantown's premier sushi restaurant</h2>
          <div>with ingredients sourced from Japan and Canada</div> */}
          <div className="image-grid">
            <div
              className="item"
              style={{
                backgroundImage: `url(${require("../../assets/home/food/4.jpg")})`,
              }}
            />
            <div
              className="item"
              style={{
                backgroundImage: `url(${require("../../assets/home/food/3.jpg")})`,
              }}
            />
            <div
              className="item"
              style={{
                backgroundImage: `url(${require("../../assets/home/food/5.jpg")})`,
              }}
            />
          </div>
        </div>

        <Parallax
          bgImage={require("../../assets/home/backgrounds/2.jpg")}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero small">
            <h1>PEDIGREED CHEFS</h1>
          </div>
        </Parallax>

        <div className="content-row">
          <h2>
            We are passionate about creating a innovative Japanese culinary
            experience
          </h2>
          <div className="chef-grid">
            <div className="chef">
              <img
                className="portrait"
                src={require("../../assets/home/chefs/chef_weida.jpg")}
              />
              {/* <div className="portrait" style={{backgroundImage: `url(${require('../../assets/home/chefs/weida.jpg')})`}} /> */}
              <h4>OWNER CHEF WEIDA (DAVID)</h4>
              <div>
                "Nigiri means hold, each piece must be made with the chef's
                hand. Every single piece of sushi has power and soul in the rice
                and fish"
              </div>
            </div>
          </div>
          <iframe
            id="yelp-reservations-widget"
            frameBorder="0"
            width="100%"
            height="88"
            src="//www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco/widget?orientation=horizontal&color-scheme=light"
          >
            {" "}
            <a href="https://www.yelp.com/reservations/sasa-japanese-restaurant-san-francisco">
              Reserve at Sasa Japanese Restaurant on Yelp
            </a>{" "}
          </iframe>
        </div>
      </div>
    );
  }
}
