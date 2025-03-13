import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import HyperionIcon from './Hyperion_Icon.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container" onClick={closeMenu}>
        <img src={HyperionIcon} alt="Hyperion Logo" className="logo-icon" />
        <div className="logo-text">Hyperion Residential Group</div>
      </Link>

      <button className="mobile-menu-button" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/our-people" onClick={closeMenu}>Our People</Link>            
        <Link to="/properties" onClick={closeMenu}>Properties</Link>
        <Link to="/case-studies" onClick={closeMenu}>Case Studies</Link>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 