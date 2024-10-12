import React from 'react';
import './styles/PersonalProjects.scss';

const PersonalProjects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      tools: ['React js', 'SCSS', 'Netlify'],
      link: 'https://tumiportfolio.netlify.app/',
    },
    {
      title: 'The Coding Ground website',
      description: 'A web application designed to streamline the application process, allowing users to easily submit their applications online. The platform provides detailed information about the institution, including its courses, programs, admission requirements, and other key details.',
      tools: ['HTML', 'CSS'],
      link: 'https://tumikole.github.io/thecodingground-website/index.html',
    },
    {
      title: 'Media Production website',
      description: 'A web platform designed to streamline the media production process, allowing users to easily request and manage media online. The site provides detailed information about services, including video production, photography solutions, along with pricing plans for personal, group, and business needs. The platform keeps clients informed with real-time updates on project status. , ensuring seamless communication and collaboration from concept to final delivery, helping bring their creative vision to life.',
      tools: ['React js', 'Node js and express', 'CSS', 'SCSS', 'Redux', 'Tailwind', 'Chakra UI'],
      link: 'https://66edc47191855b0008594d7a--10media.netlify.app/',
    },
  ];

  return (
    <div className="projects-container">
      <h3 className='mainHeader'>Pre-tech work experience</h3>
      <div className="personal-projects-container">
        {projects.map((project, index) => (
          <div key={index} className="personal-project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tools-used">
              <strong>Tools: </strong>
              {project.tools.join(', ')}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      <a href='https://github.com/tumikole' target="_blank" rel="noopener noreferrer"><p className='btn btn-info more'>More</p></a>
    </div>
  );
};

export default PersonalProjects;
