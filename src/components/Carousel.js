import React from 'react';
import { Carousel } from 'react-bootstrap/Carousel';

function ProjectCarousel() {
  return (
    <div>
        <Carousel fade>
            <img
                className='d-blcok w-100'
                src=''
                alt="slide one"
                />
        <Carousel.Caption>
            <h3> slide test</h3>
            <p> project explanation</p>
        </Carousel.Caption>

        </Carousel>
    </div>
  );
}

export default ProjectCarousel;
