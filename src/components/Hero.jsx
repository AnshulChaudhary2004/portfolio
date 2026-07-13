import developerImage from "../assets/images/developer.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "../styles/Hero.css";
import resume from "../assets/Anshul_Chaudhary_Resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="greeting">Hi, I'm</p>
        <h1>Anshul Chaudhary</h1>
        <h2>Full Stack MERN Developer</h2>
        <p>
          I build responsive websites and full-stack web applications using
          HTML,CSS,JavaScript,React,Node.js,Express.js, and MongoDB.
        </p>
        <div className="buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>
          <a href={resume} download>
            <button>Download Resume</button>
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/AnshulChaudhary2004"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/anshul-chaudhary-ab129a36b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:anshul705590@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={developerImage} alt="Developer Illustration" />
      </div>
    </section>
  );
}

export default Hero;
