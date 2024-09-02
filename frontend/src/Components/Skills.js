import React from 'react';
import './styles/Skills.scss';

const skills = [
  { name: 'Product Testing (Manual Testing)', level: 85 },
  { name: 'Playwright Framework (UI End-to-End Testing)', level: 90 },
  { name: 'JavaScript Programming Language', level: 80 },
  { name: 'Reporting and Documentation', level: 75 },
  { name: 'React JS', level: 80 },
  { name: 'Redux', level: 70 },
  { name: 'Node JS and Express', level: 75 },
  { name: 'Problem-solving', level: 85 },
  { name: 'API / HTTP Request Programming', level: 80 },
  { name: 'Database Design and Use', level: 75 },
];

const Skills = () => (
  <section className="skills">
    <h2>My Skills</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <h3>{skill.name}</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${skill.level}%` }}>
              <span className="progress-label">{skill.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
