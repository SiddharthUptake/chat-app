import React from "react";

const FireAnimate = ({ height = "200px", width = "200px" }) => {
  return (
    <div class="fire" style={{ height, width }}>
      <div class="fire-left">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-center">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-right">
        <div class="main-fire"></div>
        <div class="particle-fire"></div>
      </div>
      <div class="fire-bottom">
        <div class="main-fire"></div>
      </div>
    </div>
  );
};

export default FireAnimate;
