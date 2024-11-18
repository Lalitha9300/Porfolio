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
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
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
