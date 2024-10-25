import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/WhatsApp Image 2024-10-25 at 13.44.03_a82a92ce.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Company Title Here!!!
          </h1>
          <p className="primary-text">
            Company Slogan here!!!
          </p>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
