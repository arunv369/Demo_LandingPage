import React from "react";
import "../style/footer.scss";
import facebook_logo from "../assert/facebook.svg";
import twitter_logo from "../assert/twitter.svg";
import instagram_logo from "../assert/instagram.svg";
import Subtract_logo from "../assert/Subtract.svg";

const Footer = () => {
  return (
    <div class="footer">
      <ul class="footer-navigation">
        <li class="footer-navigation-list">Home</li>
        <li class="footer-navigation-list">Page 1</li>
        <li class="footer-navigation-list">Page 2</li>
      </ul>
      <span class="footer-line" />
      <div class="footer-social-media">
        <img src={facebook_logo} alt="facebook_logo" />
        <img src={twitter_logo} alt="twitter_logo" />
        <img src={instagram_logo} alt="instagram_logo" />
        <img src={Subtract_logo} alt="Subtract_logo" />
      </div>
      <div class="footer-content1">© Logo, Inc.</div>
    </div>
  );
};

export default Footer;
