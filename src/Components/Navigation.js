import React from "react";

const Navigation = ({ changePage }) => {
  return (
    <div className="navigation">
      <button
        onClick={() => {
          changePage(-1);
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          changePage(1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Navigation;
