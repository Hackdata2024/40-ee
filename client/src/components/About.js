import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Elders, akin to trees, shield and nurture us.
        </h1>
        <p className="primary-text">
          Assisting the elderly isn't a burden; it's an opportunity to show love
          and respect for those who paved the way for us.
        </p>
        <p className="primary-text">
          As we lend a helping hand to the elderly, we also enrich our own lives
          with the wisdom and grace that comes with age
        </p>
      </div>
    </div>
  );
};

export default About;
