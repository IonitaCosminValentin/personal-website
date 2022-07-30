import React from "react";
import arrow from "../Assets/arrow.png";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <h4>Welcome,</h4>

      <h1>I'm Vali.</h1>

      <p>Junior Front-End Developer</p>
      <a href="#about" className="arrow">
        <span>SCROLL</span>
        <img src={arrow} alt="" />
      </a>
    </div>
  );
};

export default Intro;
