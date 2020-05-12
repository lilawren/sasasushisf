import React, { Component } from "react";
import "./Menu.scss";
import { Parallax } from "react-parallax";

export default class Menu extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Sasa Japanese — Menu";
  }

  render() {
    return (
      <div className="menu">
        <Parallax
          bgImage={require("../../assets/menu/2.jpg")}
          bgImageAlt="interior"
          strength={200}
        >
          <div className="hero">
            <div className="content">
              <h1>MENU</h1>
              <div className="content-row">
                <h2>To-go Menu</h2>
                <div className="center">
                  Note: We will still be accepting to-go orders during the
                  Coronavirus quarantine.
                  <br />
                  <br />
                  <a
                    href="https://www.doordash.com/business/431549/?utm_source=partner-link&utm_medium=website&utm_campaign=431549&utm_content=red-xl"
                    target="_blank"
                    alt="Order Food Delivery with DoorDash"
                    title="Order Food Delivery with DoorDash"
                    style={{
                      "text-decoration": "none",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "268px",
                        height: "118px",
                        margin: "0px auto",
                        backgroundImage:
                          "url(https://cdn.doordash.com/media/button/button_red_xl.svg)",
                        color: "transparent",
                      }}
                    >
                      Order Food Delivery with DoorDash
                    </div>
                    <br />
                  </a>
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/togo1.jpg")}
                    alt="togoMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/togo2.jpg")}
                    alt="togoMenu2"
                  />
                </div>
                <h2>Lunch Menu</h2>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/lunch_omakase.jpg")}
                    alt="lunchMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/lunch_menu.jpg")}
                    alt="lunchMenu"
                  />
                </div>
                <h2>Dinner Menu</h2>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/omakase.jpg")}
                    alt="dinnerMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/menu.jpg")}
                    alt="dinnerMenu"
                  />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
