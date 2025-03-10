import React, { useState } from 'react';
import './Navbar.css';
import HyperionIcon from './Hyperion_Icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={HyperionIcon} alt="Hyperion Logo" className="logo-icon" />
        <div className="logo-text">Hyperion Residential Group</div>
      </div>

      <button className="mobile-menu-button" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 