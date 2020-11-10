import React, { Component } from "react";
import "./Footer.scss";

import yelp from "../../assets/footer/yelp.svg";
import ig from "../../assets/footer/instagram.svg";
import fb from "../../assets/footer/facebook.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="info">
          <div className="address">
            <div>Japan Center East Mall (2nd floor, above Daiso)</div>
            <div>22 Peace Plz</div>
            <div>Ste 530</div>
            <div>San Francisco, CA 94115</div>
            <div>(628) 600-6945</div>
          </div>
          <div className="hours">
            <div>
              <div>Monday-Sunday</div>
              <div>12:00pm - 2:00pm</div>
              <div>5:30pm - 9:00pm</div>
            </div>
          </div>
        </div>
        <div className="social">
          <a href="https://www.yelp.com/biz/sasa-san-francisco" target="_blank">
            <img src={yelp} alt="yelp" />
          </a>
          <a href="https://www.instagram.com/sasa_sanfrancisco" target="_blank">
            <img src={ig} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/pages/category/Japanese-Restaurant/Sasa-Japanese-Restaurant-1275103022630839/"
            target="_blank"
          >
            <img src={fb} alt="facebook" />
          </a>
        </div>
      </div>
    );
  }
}
