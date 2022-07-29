import React from "react";

const Resume = () => {
  return (
    <div className="resume">
      <br />
      <br />
      <br />
      <h1>
        My <em className="color-scheme">Resume</em>
      </h1>
      <br />
      <br />
      <ul>
        <li>
          <h2 className="color-scheme">Education</h2>
          <br />
          <span>2019</span>
          <br /> <span>Iordache Golescu, Gaesti.</span>
          <br />
          <p>I got my high school diploma in Mechatronics Engineering.</p>
          <br />
          <span>2021</span>
          <br /> <span>Iordache Golescu, Gaesti.</span>
          <p>I got my bachelor's degree.</p>
        </li>
        <br />
        <br />
        <li>
          <h2 className="color-scheme">Experience</h2>
          <br />
          <span>2020</span>
          <br />
          <p>I started web development.</p>
          <br />
          <span>Early 2021</span>
          <br />
          <p>First one-page application made using React.</p>
          <br />
          <span>Early 2022</span>
          <p>First time applying for a job.</p>
          <br />
          <span>Late 2022 - Early 2023</span>
          <p>Hopefully landing my first job, and expanding this section.</p>
        </li>
        <br />
        <br />
        <li>
          <h2 className="color-scheme">Languages</h2>
          <p>
            Romanian - Native <br /> English - Proficent
          </p>
        </li>
        <br />
        <br />
        <li>
          <h2 className="color-scheme">Skills</h2>
          <div className="skill-tree">
            <div className="skill-text">
              JavaScript/HTML/CSS <span className="percent">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}></div>
            </div>
          </div>
          <br />
          <div className="skill-tree">
            <div className="skill-text">
              React <span className="percent">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}></div>
            </div>
          </div>
          <br />
          <div className="skill-tree">
            <div className="skill-text">
              Redux <span className="percent">60%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "60%" }}></div>
            </div>
          </div>
          <br />
          <div className="skill-tree">
            <div className="skill-text">
              Web Design <span className="percent">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}></div>
            </div>
          </div>
          <br />
          <br />
        </li>
        <li>
          <h2 className="color-scheme">Other Strengths</h2>
          <p>
            Team Player <br /> Outsite the box thinking <br /> Always positive
            <br /> Curious <br /> Passionate <br />
            Dedicated
          </p>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Resume;
