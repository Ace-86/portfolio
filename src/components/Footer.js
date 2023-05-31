import React from 'react';
import './styles/Footer.css';
import github from './images/github.png';
import linked from './images/linked.png';
import twitter from './images/twitter.png';


const Footer = () => {
  return (
    <footer>
        <div className='return_top'>
          ^
        </div>
        
            <div className='links-lined'>
      <img
        className=''
        src={twitter}
        alt='twitter'
      />
      <img
        className=''
        src={linked}
        alt='linkedin'
      />
      <img
        className=''
        src={github}
        alt='github'
        />
      </div>
        
      <div className="footer-content">
        <p>&copy; 2023 Aaron Griffin</p>
      </div>
    </footer>
  );
};

export default Footer;
