import React from "react";

function DoordashButton() {
  return (
    <a
      href="https://order.online/business/sasa-japanese-restaurant-431549"
      alt="Order Food Delivery with DoorDash"
      title="Order Food Delivery with DoorDash"
      style={{
        "text-decoration": "none",
        "fontSize": "22px"
      }}
    >
      <div style={{
        "padding": "10px"
      }}>
        Delivery only
      </div>
      <div
        style={{
          position: "relative",
          width: "268px",
          height: "118px",
          backgroundImage:
            "url(https://cdn.doordash.com/media/button/button_red_xl.svg)",
          color: "transparent",
        }}
      >
        Order Food Delivery with DoorDash
      </div>
    </a>
  );
}

export default DoordashButton;
