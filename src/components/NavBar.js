import React from 'react';
import './styles/NavBar.css'

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
        <li onClick={() => scrollToSection('project')}>Projects</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>

      </ul>
    </nav>
  );
};

export default Navbar;
