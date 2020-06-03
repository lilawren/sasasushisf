import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      {"We do "}
      <a
        href="https://www.doordash.com/business/431549/?utm_source=partner-link&utm_medium=website&utm_campaign=431549&utm_content=red-xl"
        target="_blank"
      >
        doordash delivery
      </a>
      {" and "}
      <a
        href="https://ordering.app/api/clover/brand_url/?clover_merchant_id=TQSSQEWH5HNW1"
        target="_blank"
      >
        in-store pickup orders!
      </a>
    </div>
  );
}

export default Banner;
