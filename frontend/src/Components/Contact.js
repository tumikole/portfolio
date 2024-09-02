import React from 'react';
import './styles/Contact.scss';
import Resume from '../assets/pdf/Ramollo Samuel Tumisan (3).pdf'

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    
    <div className="social-links">
      <h3>Connect with me on social media:</h3>
      <ul>
        <li><a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </div>
    
    <div className="resume-download">
      <h3>Want to know more?</h3>
      <p>You can download my resume to get detailed information about my skills and experience.</p>
      <a href={Resume} download="Ramollo Samuel">
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  </section>
);

export default Contact;