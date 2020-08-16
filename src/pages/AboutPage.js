import React from 'react';
import Hero from '../components/Hero';
import AboutContent from '../components/AboutContent';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <AboutContent>
        <p className="text-white">My name is Michael Veiga and I am currently enrolled in the UNH
                coding bootcamp certification program. I am aspiring to become a
                full stack developer and looking for the opportunity to grow my
                skill-set within a reputable organization.</p>

        <p className="text-white">I have experience with Node.Js, Express, JavaScript, jQuery, React.js, React, JSX,
                GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3,
                Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful
                API, ES6+, React Hooks, JSON, and Sequelize.</p> 

        <p className="text-white">While I do not have a formal computer science degree, I did graduate from UNH with a
                bachelors in Political Science. For the past two years I have
                worked as a commercial account executive for Johnson Controls
                Security. That job helped my to realize that I was much more
                interested in technology, and so I decided to make a change.</p>
      </AboutContent>
    </div>
  );
}

export default AboutPage;
