import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Logos/HyperionICON.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="logo-container">
                <img src={logo} alt="Logo" className="logo-icon" />
                <span className="logo-text">Hyperion Residential Group</span>
            </Link>

            <div className="menu-icon" onClick={toggleMenu}>
                <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
            </div>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/our-people" onClick={toggleMenu}>Our People</Link>
                {/* <Link to="/properties" onClick={toggleMenu}>Properties</Link>
                <Link to="/case-studies" onClick={toggleMenu}>Case Studies</Link> */}
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar; 