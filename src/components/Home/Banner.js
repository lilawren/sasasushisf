import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      {"We do delivery with "}
      <a
        href="https://order.online/business/sasa-japanese-restaurant-431549"
      >
        <div
          className="dd-logo"
          style={{
            backgroundImage: `url(${require("../../assets/home/dd.png")})`,
          }}
        />
      </a>
      {" and in-store pickup with "}
      <a
        href="https://order.toasttab.com/online/sasajapaneserestaurant"
      >
        <div
          className="ordering-logo"
          style={{
            backgroundImage: `url(${require("../../assets/home/toast_logo.png")})`,
          }}
        />
      </a>
      !
    </div>
  );
}

export default Banner;
