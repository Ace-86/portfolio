// import React, { Component } from 'react'
// import  "./styles/NavBar.css"
// import { Link, animateScroll as scroll, scroller } from 'react-scroll'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


// class NavBar extends React.Component {

//         constructor(props) {
//             super(props);
//             this.scrollToTop = this.scrollToTop.bind(this);
//           }
        
//           scrollToTop() {
//             scroll.scrollToTop();
//           }
        
//           scrollTo() {
//             scroller.scrollTo('scroll-to-element', {
//               duration: 800,
//               delay: 0,
//               smooth: 'easeInOutQuart'
//             })
//           }
        
//           render() {
//             return (
//               <>
//                   <nav className=" navbar-expand-lg fixed-top">
//                     <div className="container-fluid bg-secondary">
//                       <Row>
//                       <Col> Ace</Col>
//                       <Col>
//                         <ul className="style-nav">
//                           <li><Link activeClass="active" className="link home-style" to="Hero" spy={true} smooth={true} duration={500} >Home</Link></li>
//                           <li><Link activeClass="active" className="link about-style" to="About" spy={true} smooth={true} duration={500}>About</Link></li>
//                           <li><Link activeClass="active" className="link project-style" to="Project" spy={true} smooth={true} duration={500} >Project</Link></li>
//                           <li><Link activeClass="active" className="link contact-style" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
//                         </ul>
//                       </Col>
//                       <Col className='social-links'>
//                       Links
//                       </Col>
//                       </Row>
//                     </div>
//                   </nav>
//                   </>
                
//   );
// }
// }

// export default NavBar;


// components/Navbar.js

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="#hero">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        <li onClick={() => scrollToSection('hero')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
