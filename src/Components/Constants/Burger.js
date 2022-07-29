import React from "react";
import burgerIcon from "../../Assets/burgerIcon.svg";

const Burger = ({ openBurger, setPage }) => {
  return (
    <div className="burger">
      <img src={burgerIcon} alt="" onClick={openBurger} />
      <div className="pages">
        <a
          href="#intro"
          onClick={() => {
            setPage(0);
          }}
        >
          Intro
        </a>
        <a
          href="#about"
          onClick={() => {
            setPage(1);
          }}
        >
          About
        </a>
        <a
          href="#resume"
          onClick={() => {
            setPage(2);
          }}
        >
          Resume
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            setPage(e, 3);
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setPage(4);
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Burger;
