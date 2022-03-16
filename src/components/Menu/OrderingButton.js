import React from "react";
import "./OrderingButton.scss";

function OrderingButton() {
  return (
    <a
      href="https://clover.com/online-ordering/sasa-japanese-restaurant-san-francisco-2"
      target="_blank"
      rel="noopener noreferrer"
      className="ordering-button"
    >
      <div
        style={{
          backgroundImage: `url(${require("../../assets/home/clover.png")})`,
        }}
      />
      (in-store pickup)
    </a>
  );
}

export default OrderingButton;
