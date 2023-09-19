import React from "react";

const Hero = () => {
  return (
    <div className="hero-pc">
      <p className="hello-world">Hello World!</p>
      <i
        className="arrow-icon fa-solid fa-arrow-down-long"
        style={{ color: "#ffffff" }}
      ></i>

      <p className="my-name">
        <span className="pixels">
          I'm <br />
        </span>
        Catarina Martelo
      </p>

      <p className="hero-text">
        A passionate <span className="web-developer">Web Developer</span> eager
        to apply and develop my skills in a professional environment.
      </p>
      <a href="#contacts" className="contact-me">
        Get in touch!
      </a>
    </div>
  );
};

export default Hero;
