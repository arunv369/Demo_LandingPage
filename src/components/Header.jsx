import React from "react";
import "../style/header.scss";
import laptop_img from "../assert/james-harrison-vpOeXr5wmR4-unsplash.png";
import logo_img from "../assert/Union.svg";
import logo_svg from "../assert/Logo.svg";

const Header = () => {
  return (
    <div class="image-container">
      <img class="background-image" src={laptop_img} alt="laptop_img" />
      <div class="logo-container">
        <img class="logo_svg_img" src={logo_img} alt="logo_svg" />
        <h2>LOGO</h2>
      </div>
      <div class="lorem_header">Lorem ipsum dolor sit amet</div>
      <div class="lorem_header1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <header class="header">
        <img class="img" src={logo_svg} alt="logo" />
        <ul class="navigation">
          <li class="navigation_list">Home</li>
          <li class="navigation_list">Page 1</li>
          <li class="navigation_list">Page 2</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
