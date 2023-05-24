import React from 'react';
import './styles/Contact.css';
import ContactForm from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Contact() {
  return (
    <div className='contact'>
      <h1> Connect With Me</h1>
      <Row>
      <Col >
        <ContactForm className='col-sm '/>
      </Col>
        <Col>
          right side
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
