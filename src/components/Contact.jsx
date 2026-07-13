import "../styles/Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        I'm currently looking for internship and full-stack web development
        oppurtunities. Feel free to connect with me.
      </p>
      <div className="contact-links">
        <a href="mailto:anshul705590@gmail.com">
          <FaEnvelope /> Email
        </a>
        <a
          href="https://github.com/AnshulChaudhary2004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/anshul-chaudhary-ab129a36b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
