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
          <li><a href=".">Contact</a></li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
