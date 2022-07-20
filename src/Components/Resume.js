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
          <h2 className="underline-main">Education</h2>
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
          <h2 className="underline-main">Experience</h2>
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
          <h2 className="underline-main">Languages</h2>
          Romanian - Native <br /> English - Proficent
        </li>
        <br />
        <br />
        <li>
          <h2 className="underline-main">Skills</h2>
          JavaScript/HTML/CSS <br /> React <br /> Redux <br /> Web Design
          <br />
          <br />
        </li>
        <li>
          <h2 className="underline-main">Other Strengths</h2>
          <p>
            Team Player <br /> Outsite the box thinking <br /> Always positive
            <br /> Curious <br /> Passionate <br />
            Dedicated
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Resume;
