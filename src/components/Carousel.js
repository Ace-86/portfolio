import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import grass from "./images/grass.jpg";
import moon from "./images/moon.jpg";
import apple from "./images/apple.jpg";
import "./styles/Project.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCarousel() {
  return (
    <div className='project-container'>
        <Carousel fade>
            <Carousel.Item>
            <img
                className='d-block w-100'
                src={grass}
                alt="slide 1"
                />

        <Carousel.Caption>
            <h3> slide 1</h3>
            <p> project explanation</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='d-block w-100'
                src={apple}
                alt="slide 2"
                />

        <Carousel.Caption>
            <h3> slide 2</h3>
            <p> project explanation</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className='d-block w-100'
                src={moon}
                alt="slide 3"
                />

        <Carousel.Caption>
            <h3> slide 3</h3>
            <p> project explanation</p>
        </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
    </div>
  );
}

export default ProjectCarousel;
