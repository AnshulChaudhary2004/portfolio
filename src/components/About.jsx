import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        I am a Computer Science Engineering student passionate about Full Stack
        Web development. I enjoy building modern,responsive and user-friendly
        web applications using the MERN stack.
      </p>
      <div className="about-info">
        <div className="info-card">
          <h3>Education</h3>
          <p>B.Tech in Computer Science & Engineering</p>
        </div>
        <div className="info-card">
          <h3>Skills</h3>
          <p>React, Node.js, Express.js, MongoDB</p>
        </div>
        <div className="info-card">
          <h3>Goal </h3>
          <p>
            Looking for internships and opportunities to grow as a Full Stack
            Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
