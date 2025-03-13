import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import '../styles/OurPeople.css';
// Import just Jerry's image for now
import jamesImage from '../components/Assets/Headshots/JamesG_Headshot.jpeg';

const OurPeople = () => {
    return (
        <main className="page">
            <h1>Our People</h1>
            <div className="people-grid">
                <div className="person-card">
                <div className="person-image placeholder"></div>
                    <h3>Jerry Wojenski</h3>
                    <p>CEO</p>
                </div>
                <div className="person-card">
                <img 
                        src={jamesImage} 
                        alt="Jerry Wojenski" 
                        className="person-image"
                    />
                    <h3>James Guidi</h3>
                    <p>Director Of Technology</p>
                </div>
                <div className="person-card">
                    <div className="person-image placeholder"></div>
                    <h3>Andrien White</h3>
                    <p></p>
                </div>
            </div>
            <div className="cta-container">
                <Link to="/properties" className="cta-button">
                    Check Out Our Properties
                    <span className="arrow">→</span>
                </Link>
            </div>
        </main>
    );
};

export default OurPeople; 