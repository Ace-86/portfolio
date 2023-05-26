import './styles/Hero.css';
import React from 'react';
import TextScrambleComponent from './Scramble';

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="left-side">
        <h1>Aaron Griffin</h1>
        <h2>Front-end Developer</h2>
      
      </div>
      <div className="right-side">
        <div className='lined-scramble'>
        <div className='symbol-1'> &lt; </div>
        <TextScrambleComponent />
        <div className='symbol-1'> &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;