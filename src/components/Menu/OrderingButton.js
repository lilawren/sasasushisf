import React from "react";
import "./OrderingButton.scss";

function OrderingButton() {
  return (
    <a
      href="https://order.toasttab.com/online/sasajapaneserestaurant"
      className="ordering-button"
    >
      <div style={{
        "padding": "10px",
      }}>
        In-store pickup
      </div>
      <div
        className="btn-img"
        style={{
          backgroundImage: `url(${require("../../assets/home/toast_logo.png")})`,
        }}
      />
    </a>
  );
}

export default OrderingButton;
