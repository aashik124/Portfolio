import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2><i class="fas fa-laptop-code"></i> Skills</h2>
      <div className="skills-content">
        <div className="skill-item">
          <h3>Programming Languages</h3>
          <p><strong>Python</strong> — Experienced in Python for backend development, data analysis, and automation.</p>
          <p><strong>JavaScript</strong> — Proficient in JavaScript for building interactive web applications.</p>
          <p><strong>C++</strong> — Knowledgeable in C++ for system programming and algorithm design.</p>
        </div>
        <div className="skill-item">
          <h3>Web Development</h3>
          <p><strong>HTML/CSS</strong> — Skilled in crafting responsive and visually appealing web pages.</p>
          <p><strong>React.js</strong> — Experienced with React.js for building modern, dynamic user interfaces.</p>
          <p><strong>Node.js</strong> — Familiar with Node.js for building server-side applications and APIs.</p>
        </div>
        <div className="skill-item">
          <h3>Tools & Technologies</h3>
          <p><strong>Git</strong> — Proficient in version control with Git for collaboration and code management.</p>
          <p><strong>Docker</strong> — Experience with containerization using Docker for consistent development environments.</p>
          <p><strong>MySQL</strong> — Knowledge of relational databases and querying with MySQL.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
