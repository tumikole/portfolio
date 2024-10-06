import React from 'react';
import './styles/Contact.scss';
import Resume from '../assets/pdf/Ramollo Samuel Tumisan.pdf'

const Contact = () => (
  <section className="contact">

    <div className="social-links">
      <h3 className='mainHeader'>Connect with me on social media:</h3>
      <div className='container'>
      <ul>
        <li>
          <div>
            <box-icon name='linkedin' size="xm" type='logo' color='#0077b5' ></box-icon>
          </div>
          <a href="https://www.linkedin.com/in/samuel-ramollo-1aa8a2202/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li>
          <div>
            <box-icon name='github' size="xm" type='logo' color='#0077b5' ></box-icon>
          </div>
          <a href="https://github.com/tumikole/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
       
        <li>
          <div>
            <box-icon name='whatsapp' size="xm" type='logo' color='#0077b5' ></box-icon>
          </div>
          <a href="https://wa.me/0637986637" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>

      </ul>
      </div>
    </div>

      <h3 className='mainHeader'>Want to know more?</h3>
    <div className="resume-download">
      <p>You can download my resume to get detailed information about my skills and experience.</p>
      <a href={Resume} download="Ramollo Samuel">
        <button className="resume-button">Download Resume</button>
      </a>
    </div>
  </section>
);

export default Contact;