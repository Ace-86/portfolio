import React from 'react';
import './styles/Contact.css';
import './styles/Links.css';
import github from './images/github.png';
import linked from './images/linked.png';
import twitter from './images/twitter.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button type="submit">Send</button>
          </form>
       
       
       
        </div>
        <div className="contact-info">
    


        <div>
      <Col>
      <Row className='test3'>
      <div className='test2'>
      <h3> Email</h3>
        <p> awes86@gmail.com</p>
      </div>
      
      </Row>
      
      <Row className='test3'>
      <div className='test2'>
      <h3> Location</h3>
      <p> Chicago, Il </p>
      </div>
      </Row>
      
      <Row className='test3'>
      <div className='test2'>

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
        </div>
      
      </Row>
      </Col>
      </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
