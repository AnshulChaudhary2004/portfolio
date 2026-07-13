import "../styles/Skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill} title={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
