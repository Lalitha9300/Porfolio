import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import '../CSS/Header.css';

const Header = () => {
  
  return (
    <header>
      <nav>
      <Link to="/">
        <Logo />
      </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        end
      </nav>
    </header>
  );
}

export default Header;
