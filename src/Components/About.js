import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <br />
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
        writing <span>JavaScript, HTML, CSS</span>, and more than a year using{" "}
        <span>React, Redux</span>, and
        <span> CSS preprocessors.</span>
      </p>
      <div className="others">
        <div>
          <h3 className="color-scheme">Passions/Hobbies:</h3>
          <p>
            Coding, Reading,
            <br />
            Self-Improvment, Traveling,
            <br />
            Sports, Gaming.
          </p>
        </div>

        <div>
          <span className="color-scheme">Age:</span> 22
        </div>

        <div>
          <span className="color-scheme">Country:</span> Romania
        </div>

        <div>
          <span className="color-scheme">Phone:</span> +40721 732 718
        </div>

        <div>
          <span className="color-scheme">Adress:</span> Uliesti, Str. Plopilor,
          Nr 12
        </div>

        <div>
          <span className="color-scheme">Email:</span>
          <span className="email">cosminvalentinionita@gmail.com</span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default About;
