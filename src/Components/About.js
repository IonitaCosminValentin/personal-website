import React from "react";
import "../Css/About.scss";

const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <h1>
        About <span className="color-scheme">Me</span>
      </h1>
      <br />
      <br />
      <p className="indent">
        I am a quick and dedicated person, focused on personal and professional
        growth, with an inclination for problem-solving and computer science, a
        self-taught front-end developer with over two years of experience
        writing JavaScript, HTML, CSS, and more than a year using React, Redux,
        and CSS preprocessors.
      </p>
      <br />
      <span className="color-scheme">Age:</span> 22
      <br />
      <br />
      <span className="color-scheme">Country:</span> Romania
      <br />
      <br />
      <span className="color-scheme">Adress:</span> Uliesti, Str. Plopilor, Nr
      12
      <br />
      <br />
      <span className="color-scheme">Email:</span>
      <br />
      IonitaCosminValentin@gmail.com
      <br />
      <br />
      <span className="color-scheme">Phone:</span> +40721 732 718
      <br />
      <br />
      <span className="color-scheme">Passions:</span>
      <ul>
        <li>Coding</li>
        <li>Reading</li>
        <li>Self-Improvment</li>
        <li>Traveling</li>
        <li>Gaming</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default About;
