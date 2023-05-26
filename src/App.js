import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';
import Navbar from './components/NavBar';
import ProjectCarousel from './components/Project';

const App = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='main_background'>
      <Navbar scrollToSection={scrollToSection} />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="project">
        <ProjectCarousel />
      </section>
      <section id="contact">
      <Contact />
      </section>
        <Footer />
    </div>
  );
};

export default App;
