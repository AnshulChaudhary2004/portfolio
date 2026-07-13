import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Calculator</h3>
          <p>
            A calculator application built with React that performs basic
            arithmetic operations and responsive user interface.
          </p>
          <div className="project-buttons">
            <a
              href="https://calculator-topaz-eight-26.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Demo</button>
            </a>

            <a
              href="https://github.com/AnshulChaudhary2004/calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Social Media UI</h3>
          <p>
            A responsive social media interface built using resuable React
            components and modern CSS.
          </p>
          <div className="project-buttons">
            <a
              href="https://social-media-silk-ten.vercel.app/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/AnshulChaudhary2004/Social-media"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>To-Do App</h3>
          <p>A React application for managing daily tasks.</p>
          <div className="project-buttons">
            <a
              href="https://todo-app-version-three.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Live Demo</button>
            </a>

            <a
              href="https://github.com/AnshulChaudhary2004/TODO-App-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
