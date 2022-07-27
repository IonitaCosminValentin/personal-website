import React from "react";
import burgerIcon from "../../Assets/burgerIcon.svg";

const Burger = () => {
  return (
    <div className="burger">
      <img
        src={burgerIcon}
        alt=""
        onClick={() => {
          console.log(2);
        }}
      />
    </div>
  );
};

export default Burger;
