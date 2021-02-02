import React from 'react';
import Hero from '../components/Hero';
import AboutContent from '../components/AboutContent';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <AboutContent>
        <p className="text-white">
          Leveraging a background in sales and physical security design.
          Recognized for exceeding sales quotas for two consecutive quarters,
          utilizing strong attention to detail, interpersonal skills, and a
          drive to excel. An excellent collaborator with years of experience
          working on highly effective teams.
        </p>

        <p className="text-white">
          Recently graduated from the University of New Hampshire receiving a
          certificate in Full Stack Web Development, honing skills in
          JavaScript, HTML, CSS, React, Node.js, and more. I have always been
          passionate about technology and I’m looking forward to pivoting
          careers and making a positive impact in the tech-space. I'm currently
          searching for a company to which I can provide strong value-added
          solutions to drive technology-savvy development and intuitive user
          experiences.
        </p>
      </AboutContent>
    </div>
  );
}

export default AboutPage;
