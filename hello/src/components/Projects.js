import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Tourist Guide Application',
    techStack: 'HTML, CSS, JavaScript, PHP, MySQL',
    description: 'A web application to help user to explore places and hotels around who wants to visit.',
    github: 'https://github.com/yourusername/portfolio'
  },
  {
    id: 2,
    title: 'Resume Filter',
    techStack: 'Python, Pandas, Scikit-learn, SpaCy, HTML',
    description: 'A ML model which analyze the resume which is entered by users based on different keywords and give rank.',
    github: 'https://github.com/yourusername/weather-app'
  },
  {
    id: 3,
    title: 'Single Page Mini Portfolio',
    techStack: 'HTML, CSS, JavaScript, React',
    description: 'A simple UI for portfolio and JS functioning also.',
    github: 'https://github.com/yourusername/todo-app'
  }
];

const Projects = () => {
  const [showDesc, setShowDesc] = useState({});

  const toggleDescription = (id) => {
    setShowDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="projects-section">
      <h2><i className="fas fa-folder-open"></i>      My Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
            <button className="toggle-btn" onClick={() => toggleDescription(project.id)}>
              {showDesc[project.id] ? 'Hide Description' : 'Show Description'}
            </button>
            {showDesc[project.id] && <p className="description">{project.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
