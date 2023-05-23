import React from 'react';
import  {Carousel}  from 'bootstrap';

function ProjectCarousel() {
  return (
    <div>
        <Carousel fade>
            <Carousel.Item>
            <img
                className='d-block w-100'
                src=''
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
                src=''
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
                src=''
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
