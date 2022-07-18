import React from "react";
import "../Css/Resume.scss";

const Resume = () => {
  return (
    <div className="resume">
      <br />
      <br />
      <br />
      <h1 className="color-scheme">Resume</h1>
      <br />
      <br />
      <div>
        <h2 className="underline-second">Education</h2>
        <br />
        <span>2019</span>
        <br /> <span>Iordache Golescu, Gaesti.</span>
        <br />
        <p>I got my high school diploma in Mechatronics Engineering.</p>
        <br />
        <span>2021</span>
        <br /> <span>Iordache Golescu, Gaesti.</span>
        <p>I got my bachelor's degree.</p>
      </div>
      <br />
      <br />
      <div>
        <h2 className="underline-second">Experience</h2>
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
      </div>
      <br />
      <br />
      <div>
        <h2 className="underline-second">Languages</h2>
        <ul>
          <li>Romanian - Native</li>
          <li>English - Proficent</li>
        </ul>
      </div>
      <br />
      <br />
      <div>
        <h2 className="underline-second">Skills</h2>
        <ul>
          <li>JavaScript/HTML/CSS</li>
          <li>React</li>
          <li>Redux</li>
          <li>Web Design</li>
        </ul>
        <br />
        <br />
      </div>
      <div>
        <h2 className="underline-second">Other Strengths</h2>
        <ul>
          <li>Team Player</li>
          <li>Outsite the box thinking</li>
          <li>Always positive</li>
          <li>Curious</li>
          <li>Passionate</li>
          <li>Dedicated</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
