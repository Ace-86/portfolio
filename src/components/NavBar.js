import React, { Component } from 'react'
import  "./styles/NavBar.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class NavBar extends React.Component {

        constructor(props) {
            super(props);
            this.scrollToTop = this.scrollToTop.bind(this);
          }
        
          scrollToTop() {
            scroll.scrollToTop();
          }
        
          scrollTo() {
            scroller.scrollTo('scroll-to-element', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
          }
        
          render() {
            return (
              <div>
                  <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav">
                          <li><Link activeClass="active" className="link home-style" to="Home" spy={true} smooth={true} duration={500} >Home</Link></li>
                          <li><Link activeClass="active" className="link about-style" to="About" spy={true} smooth={true} duration={500}>About</Link></li>
                          <li><Link activeClass="active" className="link project-style" to="Project" spy={true} smooth={true} duration={500} >Project</Link></li>
                          <li><Link activeClass="active" className="link contact-style" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  </div>
                
  );
}
}

export default NavBar;