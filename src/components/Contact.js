// import React from 'react';
// import ContactForm from './Form';
// import Links from './Links';
// import './styles/Contact.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


// function Contact() {
//   return (
//     <div className='contact'>
//       <h1> Connect With Me</h1>
//       <Row>
//       <Col >
//         <ContactForm className='col-sm '/>
//       </Col>
//         <Col>
//           <Links />
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Contact;

// components/Contact.js

// components/Contact.js

import React from 'react';

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
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
