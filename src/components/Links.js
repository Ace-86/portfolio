import React from 'react';
import github from './images/github.png';
import linked from './images/linked.png';
import twitter from './images/twitter.png';

import './styles/Links.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Links() {
  return (
    <div className='links'>
      <div>
      <Col>
      <Row className='test'>
      <div className='test2'>
      <h3> Email</h3>
        <p> awes86@gmail.com</p>
      </div>
      
      </Row>
      
      <Row className='test'>
      <div className='test2'>
      <h3> Location</h3>
      <p> Chicago, Il </p>
      </div>
      </Row>
      
      <Row className='test'>
      <h3> Social</h3>

      <div className='links-lined'>
      <img
        className=''
        src={twitter}
        alt='twitter'
      />
      <img
        className=''
        src={linked}
        alt='linkedin'
      />
      <img
        className=''
        src={github}
        alt='github'
      />
      </div>
      
      </Row>
      </Col>
      </div>

      
    </div>
  );
}

export default Links;
