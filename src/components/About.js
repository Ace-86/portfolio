import html_icon from './images/html-icon.png';
import css_icon from './images/css-icon.png';
import javascript_icon from './images/javascript-icon.png';
import bootstrap_icon from './images/bootstrap-icon.png';
import react_icon from './images/react-icon.png';
import node_icon from './images/node-icon.png';
import './styles/About.css';


import React from 'react';

const About = () => {
  return (
    <section className='test' id="about">
      <div className="about-content">
        <div className="about-me-container">
          <div className="rounded-container">
            <h2>About Me</h2>
            <p>
              I'm a self-taught web developer with experience in designing new features from ideation to production. 
              As a self-taught web and mobile app developer, I possess extensive experience in the entire software development cycle, 
              from conceptualizing new features to implementing wireframes and design flows into high-performance applications. 
              Throughout my work, I prioritize user experience, ensuring that the code I write is both reusable and efficient. 
              With a fervent dedication to merging good design, cutting-edge technology, and innovative approaches, 
              I accompany each project from its initial idea to its final release. Presently, my primary focus lies in full stack development.
            </p>
          </div>
        </div>

        <div className='technologies-container'>
          <div className='transparent-container'>
            <h2>Technologies</h2>
            <div className='tech-icons'>
              <div className='tech-icons-row'>
                <div className='tech-icon'>
                  <img src={javascript_icon} alt='JavaScript' />
                  <span>JavaScript</span>
                </div>
                <div className='tech-icon'>
                  <img src={html_icon} alt='HTML' />
                  <span>HTML</span>
                </div>
                <div className='tech-icon'>
                  <img src={css_icon} alt='CSS' />
                  <span>CSS</span>
                </div>
              </div>
              <div className='tech-icons-row'>
                <div className='tech-icon'>
                  <img src={bootstrap_icon} alt='Bootstrap' />
                  <span>Bootstrap</span>
                </div>
                <div className='tech-icon'>
                  <img src={node_icon} alt='Node.js' />
                  <span>Node.js</span>
                </div>
                <div className='tech-icon'>
                  <img src={react_icon} alt='React.js' />
                  <span>React.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;