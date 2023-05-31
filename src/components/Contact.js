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
        

      </div>
    </section>
  );
};

export default Contact;
