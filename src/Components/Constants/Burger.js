import React from "react";
import burgerIcon from "../../Assets/burgerIcon.svg";

const Burger = ({ openBurger, setPage }) => {
  return (
    <div className="burger">
      <img src={burgerIcon} alt="" onClick={openBurger} />
      <div className="pages">
        <span
          onClick={() => {
            setPage(0);
          }}
        >
          Intro
        </span>
        <span
          onClick={() => {
            setPage(1);
          }}
        >
          About
        </span>
        <span
          onClick={() => {
            setPage(2);
          }}
        >
          Resume
        </span>
        <span
          onClick={() => {
            setPage(3);
          }}
        >
          Projects
        </span>
        <span
          onClick={() => {
            setPage(4);
          }}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default Burger;
