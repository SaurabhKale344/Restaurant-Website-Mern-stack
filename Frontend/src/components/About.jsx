import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to TeBastian! We blend tradition and innovation to offer
              exceptional Delicacy in a cozy setting. Founded in 2014, our
              passion for fresh, local ingredients and authentic flavors drives
              us to deliver memorable dining experiences. Visit us and savor the
              best !
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/images/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
