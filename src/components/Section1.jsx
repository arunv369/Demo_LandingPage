import React from "react";
import "../style/bodySection.scss";
import container_img2 from "../assert/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.svg";
import container_img3 from "../assert/emile-perron-xrVDYZRGdw4-unsplash.svg";

const Section1 = () => {
  return (
    <div class="body-section">
      <div class="section-container" />
      <div class="section-content-title">
        <h2 class="section-container-content1">Lorem </h2>
        <h2 class="section-container-content2">Subtitle</h2>
      </div>
      <div class="image-container1">
        <div class="image-wrapper">
          <img class="imagee" src={container_img3} alt="Image 1" />
          <div class="overlay">
            <h4 class="content-1">01</h4>
            <p class="content-2">Lorem ipsum dolor sit</p>
            <p class="content-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div class="image-wrapper">
          <img class="imagee" src={container_img2} alt="Image 2" />
          <div class="overlay">
            <h4 class="content-1">02</h4>
            <p class="content-2">Lorem ipsum dolor sit</p>
            <p class="content-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div class="image-wrapper">
          <img class="imagee" src={container_img3} alt="Image 3" />
          <div class="overlay">
            <h4 class="content-1">03</h4>
            <p class="content-2">Lorem ipsum dolor sit</p>
            <p class="content-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
