import {  Element, scrollToTop } from 'react-scroll';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import React from 'react';
import "./App.css";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

function App () {
  

  return (
      <>
      <NavBar />

          <Element name="Hero" className="element hero-main" >
            <Hero />
        </Element>

          <Element name="About" className="element about-main">
            <About />
        </Element>

          <Element name="Project" className="element project-main">
            <Project />
        </Element>

          <Element name="Contact" className="element contact-main">
            <Contact />
        </Element>
          
        {/* <Footer> */}
          {/* <a onClick={this.scrollToTop}>To the top!</a> */}
        {/* </Footer> */}
    </>
    );
  }
;


export default App;