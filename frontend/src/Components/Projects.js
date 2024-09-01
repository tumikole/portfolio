import React from 'react';
import './styles/Projects.scss';

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>

    <div className="project-card">
      <h3>Project Name</h3>
      <p>This is a description of a project where I used React and Node.js to build a fullstack application. I was responsible for designing the frontend, developing the backend, and implementing automated testing with Playwright.</p>
      <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>

    <div className="project-card">
      <h3>Another Project</h3>
      <p>This project focused on creating a responsive web application using Python and Django. My role included developing REST APIs, integrating them with a React frontend, and ensuring the application’s quality through manual testing.</p>
      <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>

  </section>
);

export default Projects;
