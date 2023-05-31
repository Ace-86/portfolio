import React from 'react';
import "./styles/Project.css";

const projects = [
  {
    id: 1,
    title: 'PowerGrade',
    description: 'A grading app that pulls grades from a server and allows students to "Edit" their grade.',
    technologies: 'React, Node.js, mysql, express',
    image: require('./images/placeholder1.png')
  },
  {
    id: 2,
    title: 'Reviewz',
    description: 'Movie review app that allows edits, inputs and deletion to a database',
    technologies: 'React.js, Node.js, mysql',
    image: require('./images/placeholder4.jpg')
  },
  {
    id: 3,
    title: 'Tetris Clone',
    description: 'Wanted to re-create my favorite childhood game using React.js',
    technologies: 'React.js, Javascript, Bootstrap',
    image: require('./images/placeholder3.png')
  },
];

const ProjectCard = ({ project }) => {
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

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectCarousel = () => {
  return (
    <section id="project">
      <ProjectContainer projects={projects} />
    </section>
  );
};

export default ProjectCarousel;
