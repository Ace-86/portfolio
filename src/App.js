
import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </Router>
  );
}

export default App;
