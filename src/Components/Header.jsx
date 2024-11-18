import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import '../CSS/Header.css';

const Header = () => {
  
  return (
    <header>
      <nav>
        <Logo />
        <ul>
          <li><a href=".home-container">Home</a></li>
          <li><a href=".about-container">About</a></li>
          <li><a href=".projects-containe">Projects</a></li>
          <li><a href=".ontact-container">Contact</a></li>
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
