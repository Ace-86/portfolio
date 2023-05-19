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

          <Element name="Hero" className="element" >
            <Hero />
        </Element>

          <Element name="About" className="element">
            <About />
        </Element>

          <Element name="Project" className="element">
            <Project />
        </Element>

          <Element name="Contact" className="element">
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