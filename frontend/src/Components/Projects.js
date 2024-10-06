import React, { useState } from 'react';
import './styles/Projects.scss';

const ProjectCard = ({ title, imgSrc, description, link, role }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const shortDescription = description.slice(0, 0);

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imgSrc} className="img-fluid" alt="" />
      <p>
        {isExpanded ? description : `${shortDescription} `}
        <button className="read-more" onClick={toggleReadMore}>
          {isExpanded ? 'Read less' : `About ${title}`}
        </button>
      </p>
      <br/>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View
      </a>
      <br/>
      <hr/>

      <h4>Role: {role}</h4>
    </div>
  );
};

const Projects = () => (
  <section className="projects">
    <h3 className='mainHeader'>Projects worked on</h3>
    <div className='projects-container'>
      <ProjectCard
        title="Bizzamm"
        imgSrc="https://www.entrostat.com/assets/logos/bizzamm-client-logo.png"
        description="Bizzamm is a digital document management platform designed to remove the stress and complexity of document management processes. It allows a user to choose from a variety of templated documents, fill in the relevant details and send it to others. Furthermore, custom documents can be uploaded, electronically signed and shared with others. All documents are securely stored on the system, and unique fingerprints of the documents are added to blockchain when finalised and can be validated and proven in court."
        link="https://bizzamm.com/"
        role="QA"
      />

      <ProjectCard
        title="3 Way Marketing"
        imgSrc="https://3waygroup.com/wp-content/uploads/2022/03/3wlogo-no-sub.png"
        description="Connecting clients to customers using smart data and world class technology, we deliver the right product at the right time. We oversee the entire process, starting from the initial brief and extending through data segmentation, distribution, delivery, and reporting. Our flexible approach enables us to promptly adapt and respond to the ongoing performance of your campaign. The most advantageous aspect? We operate under a shared risk model, which means that our success aligns with your success."
        link="https://3waygroup.com/"
        role="QA"
      />

      <ProjectCard
        title="Nagging Panda"
        imgSrc="https://static.wixstatic.com/media/1bc338_53d233e498d54d4ea0188238f0516aac~mv2.png/v1/crop/x_169,y_68,w_1976,h_979/fill/w_234,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Nagging%20Panda-colour-large.png"
        description="With Nagging Panda's automated email and sms reminders, you can nag for payments, follow-up quotes and collect debt at the click of a button!"
        link="https://www.naggingpanda.com/"
        role="QA"
      />

      <ProjectCard
        title="Fitillion"
        imgSrc="https://fitillion.com/wp-content/uploads/2023/07/logo-header.svg"
        description="Providing Personalised Group Fitness classes & software to gyms, companies, hotels & Northern Beaches residents. The ultimate fitness & wellness solution."
        link="https://app.fitillion.com/"
        role="QA"
      />
    </div>
  </section>
);

export default Projects;
