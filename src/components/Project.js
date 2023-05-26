import React, { useState } from 'react';
import "./styles/Project.css";


const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan mauris id fermentum dictum.',
    technologies: 'HTML, CSS, JavaScript',
    image: require('./images/placeholder1.png')
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Sed non urna. Phasellus eu ligula. Vestibulum sit amet purus.',
    technologies: 'React.js, Node.js',
    image: require('./images/placeholder4.jpg')
  },
  {
  id: 3,
  title: 'Project 3',
  description: 'Sed non urna. Phasellus eu ligula. Vestibulum sit amet purus.',
  technologies: 'React.js, Node.js',
  image: require('./images/placeholder3.png')
},
{
  id: 4,
  title: 'Project 4',
  description: 'Sed non urna. Phasellus eu ligula. Vestibulum sit amet purus.',
  technologies: 'React.js, Node.js',
  image: require('./images/placeholder5.png')
},
 
];

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const renderProject = () => {
    const project = projects[activeIndex];
    return (
      <div className="project">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies}</p>
        </div>
      </div>
    );
  };

  return (
    
    // <section id='project' >
    <div className="project-carousel">
      <button className="previous-button" onClick={handlePrevious}>
        Previous
      </button>
      {renderProject()}
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
    // </section>
  );
};

export default ProjectCarousel;
