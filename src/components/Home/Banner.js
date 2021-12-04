import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      {"We do delivery with "}
      <a
        href="https://order.online/business/sasa-japanese-restaurant-431549"
        target="_blank"
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
        href="https://ordering.app/api/clover/brand_url/?clover_merchant_id=TQSSQEWH5HNW1"
        target="_blank"
      >
        <div
          className="ordering-logo"
          style={{
            backgroundImage: `url(${require("../../assets/home/ordering.png")})`,
          }}
        />
      </a>
      !
    </div>
  );
}

export default Banner;
