import React from "react";

import NavBar from "./NavBar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <NavBar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Luscious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/images/hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Juicy</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="/images/threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="/images/logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="/images/hero2.png" alt="hero2" />
          </div>
          <h1 className="title dishes_title">Savory</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
