import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <p>
        We are a community of ethical hackers and cybersecurity enthusiasts
        dedicated to promoting awareness, skills, and collaboration in the field
        of cybersecurity.
      </p>
      <div className="topics">
        <div className="topic">Ethical Hacking</div>
        <div className="topic">Pen Testing</div>
        <div className="topic">Network Security</div>
      </div>
    </section>
  );
};
export default About;
