import React from "react";
import "../style/bodySection2.scss";
import section2_img from "../assert/Rectangle.svg";
import arrow_img from "../assert/solar_arrow-up-linear.svg";

const Section2 = () => {
  return (
    <div className="body-section2">
      <div class="section-container2" />
      <img class="section2-image" src={section2_img} alt="section2_img" />
      <h2 class="section2-title">Lorem ipsum </h2>
      <span class="section2-line" />
      <p class="section2-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="section2-arrow-container">
        <p class="section2-arrow-title">Lorem ipsum</p>
        <img src={arrow_img} alt="arrow_img" />
      </div>
    </div>
  );
};

export default Section2;
