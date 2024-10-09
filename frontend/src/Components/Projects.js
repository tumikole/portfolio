import React from 'react';
import './styles/Projects.scss';

const ProjectCard = ({ title, imgSrc, description, link, role }) => {


  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className='img-container'>
      <img src={imgSrc} className="img-fluid" alt="" />
      </div>
      <p>
        <span className='role'><b>QA: Manual and end-to-end automated testing</b></span>
        <br/>
        <br/>
        <span>{description}</span>
      </p>
      <br />
      {title !== 'Bizzamm' &&
        <>
          <hr />
          <a href={link} target="_blank" rel="noopener noreferrer">
            Site link
          </a>
        </>
      }
      <br />
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
        description="At Bizzamm, I was responsible for identifying software 
        weaknesses in our all-in-one solution designed to 
        simplify business processes through DIY template creation 
        and document management. I executed automated test scripts 
        and utilized variable input to assess various use cases, 
        specifically focusing on the user interface, template functionality, 
        and document management features. I verified test outcomes against known defects to 
        identify areas requiring further testing and established test automation standards 
        during the development of tests, execution of scripts, and analysis of 
        results to achieve our testing goals. I delivered automated test results to 
        project teams for validation and assessment, detailing evaluation criteria and 
        the assessment process. Additionally, I identified reasons for test failures, 
        adjusted testing parameters and scripts, and retested to confirm that results 
        aligned with expectations."
        link="https://bizzamm.com/"
      />

      <ProjectCard
        title="3 Way Marketing"
        imgSrc="https://3waygroup.com/wp-content/uploads/2022/03/3wlogo-no-sub.png"
        description="At 3Way Marketing, I was responsible for detecting software 
        vulnerabilities in our marketing data generation and distribution systems. 
        I utilized automated test scripts and diverse inputs to assess various use cases, 
        focusing on the functionality of our customer acquisition and performance marketing 
        tools. I validated outcomes against known defects to identify areas that required 
        further testing and established automation standards for test development 
        and execution to meet our objectives. I shared results with project teams for evaluation, 
        providing detailed criteria for assessment. Additionally, I investigated test failures, 
        modified parameters, and retested to ensure that results aligned with expectations as we 
        continued to expand our services in the marketing data landscape."
        link="https://3waygroup.com/"
      />

      <ProjectCard
        title="Nagging Panda"
        imgSrc="https://static.wixstatic.com/media/1bc338_53d233e498d54d4ea0188238f0516aac~mv2.png/v1/crop/x_169,y_68,w_1976,h_979/fill/w_234,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Nagging%20Panda-colour-large.png"
        description="At Nagging Panda, I was responsible for identifying software 
        vulnerabilities in our automated accounts receivables tool designed 
        to assist businesses with invoice, statement, and quote follow-ups. 
        I executed automated test scripts and utilized diverse inputs to assess 
        various use cases, particularly focusing on the functionality of 
        automated email and SMS reminders for payments. I validated outcomes 
        against known defects to pinpoint areas requiring further testing and 
        established automation standards for test development and execution to 
        achieve our objectives. I shared results with project teams for evaluation, 
        providing clear criteria for assessment. Additionally, I investigated test failures, 
        adjusted parameters, and retested to ensure results aligned with expectations, 
        all while supporting our commitment to accelerate the payment process for diverse business sizes."
        link="https://www.naggingpanda.com/"
      />

      <ProjectCard
        title="Fitillion"
        imgSrc="https://fitillion.com/wp-content/uploads/2023/07/logo-header.svg"
        description="At Fitillion, I was tasked with evaluating software vulnerabilities 
        in our mobile applications, web platforms, and mobile web interfaces, 
        utilizing a combination of automated testing scripts and manual testing 
        techniques to address a wide range of use cases. I confirmed test results 
        against known software defects to identify areas needing further scrutiny. 
        I established and adhered to test automation standards during the development 
        of automated tests, execution of scripts, and result analysis, while also incorporating 
        manual testing to achieve comprehensive objectives. I provided project teams with detailed 
        reports on both automated and manual test results for validation and evaluation, 
        which included specific criteria and the assessment methodology. Additionally, 
        I investigated the causes of test failures, adjusted testing parameters and 
        scripts as necessary, and conducted retests—both automated and manual—to ensure 
        outcomes met expected standards across all platforms, thereby supporting 
        our mission to deliver tailored fitness solutions efficiently."
        link="https://app.fitillion.com/"
      />
    </div>
  </section>
);

export default Projects;
