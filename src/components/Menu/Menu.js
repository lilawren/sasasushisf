import React, { Component } from "react";
import "./Menu.scss";
import { Parallax } from "react-parallax";
import DoordashButton from "./DoordashButton";
import OrderingButton from "./OrderingButton";

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
                  <div className="order-buttons">
                    <DoordashButton />
                    <OrderingButton />
                  </div>
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/takeout1.jpg")}
                    alt="togoMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/takeout2.jpg")}
                    alt="togoMenu2"
                  />
                </div>
                {/* <h2>Lunch Menu</h2>
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
                */}
                <h2>In-person Dining Menu</h2>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/dining1.jpg")}
                    alt="diningMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/dining2.jpg")}
                    alt="diningMenu"
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
