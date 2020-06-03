import React from "react";
import "./OrderingButton.scss";

function OrderingButton() {
  return (
    <a
      href="https://ordering.app/api/clover/brand_url/?clover_merchant_id=TQSSQEWH5HNW1"
      target="_blank"
      rel="noopener noreferrer"
      className="ordering-button"
    >
      <div
        style={{
          backgroundImage: `url(${require("../../assets/home/ordering.png")})`,
        }}
      />
      (in-store pickup)
    </a>
  );
}

export default OrderingButton;
