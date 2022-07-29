import React, { useState } from "react";
//eslint-disable-next-line
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState();

  const sendEmail = (e) => {
    if (e[0].value && e[1].value && e[2].value) {
      emailjs
        .sendForm("service_551i1v6", "template_aqs5mpm", e, "Nzkqf_QHxs2HoTER6")
        .then((result) =>
          result.status === 200
            ? setStatus("Message Successfully Sent")
            : setStatus("Something Went Wrong, Please Try Again.")
        );
    } else setStatus("All Fields Must Be Filled");
  };

  return (
    <div className="contact" id="contact">
      <br />
      <br />
      <br />
      <h1>
        <span className="color-scheme">Contact</span> Me
      </h1>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmail(e.target);
        }}
      >
        <h4 className="status">{status}</h4>
        <label>Name:</label>
        <input type="text" name="user_name" placeholder="Enter Your Name" />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" name="user_email" placeholder="Enter Your Email" />
        <br />
        <br />
        <label>Message:</label>
        <textarea
          type="text"
          name="message"
          placeholder="Enter Your Message Here"
          className="message"
        />
        <input type="submit" value="Send" className="submit"></input>
      </form>
    </div>
  );
};

export default Contact;
