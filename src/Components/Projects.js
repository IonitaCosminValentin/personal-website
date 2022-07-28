import React from "react";
import astar from "../Assets/astar.PNG";
const Projects = () => {
  return (
    <div className="projects">
      <br />
      <br />
      <br />
      <h1 className="color-scheme">Projects</h1>
      <br />
      <br />
      <li>
        <a
          href="https://ionitacosminvalentin.github.io/A-Star-Pathfinding-Algorithm/"
          className="color-scheme underline-main"
        >
          A* Algorithm
        </a>
        <br />
        <br />
        <img src={astar} alt="404 Not Found" />
        <br />
        <a
          href="https://github.com/IonitaCosminValentin/A-Star-Pathfinding-Algorithm"
          className="color-scheme"
        >
          See Github page
        </a>
      </li>
    </div>
  );
};

export default Projects;
