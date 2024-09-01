import React from 'react';
import './styles/Contact.scss';
import Resume from '../assets/pdf/Ramollo Samuel Tumisan (3).pdf'

const Contact = () => (
  <section className="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
    
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
