import React from "react";

function DoordashButton() {
  return (
    <a
      href="https://order.online/business/sasa-japanese-restaurant-431549"
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
          backgroundImage:
            "url(https://cdn.doordash.com/media/button/button_red_xl.svg)",
          color: "transparent",
        }}
      >
        Order Food Delivery with DoorDash
      </div>
      (delivery only)
    </a>
  );
}

export default DoordashButton;
