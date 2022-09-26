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
                <br />
                <hr />
                <h2>Dinner Menu</h2>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/dinner1.jpg")}
                    alt="diningMenu"
                  />
                </div>
                <div className="menu-container">
                  <img
                    className="menu"
                    src={require("../../assets/menu/dinner2.jpg")}
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
