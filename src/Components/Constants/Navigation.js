import React from "react";

const Navigation = ({ changePage }) => {
  return (
    <div className="navigation">
      <button
        onClick={() => {
          changePage("INCREMENT");
        }}
      >
        {">"}
      </button>
      <button
        onClick={() => {
          changePage("DECREMENT");
        }}
      >
        {"<"}
      </button>
    </div>
  );
};

export default Navigation;
