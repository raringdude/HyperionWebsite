import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages.css';
import '../styles/OurPeople.css';
// Import just Jerry's image for now
import jamesImage from '../components/Assets/Headshots/JamesG_Headshot.jpeg';
import stevenImage from '../components/Assets/Headshots/SteveD_Headshot.JPG';
import andrienImage from '../components/Assets/Headshots/AndrienW_Headshot.PNG';
import jerryImage from '../components/Assets/Headshots/JerryW_Headshot.jpg';

const OurPeople = () => {
    return (
        <main className="page">
            <h1>Our People</h1>
            <div className="people-grid">
                <div className="person-card">
                <img 
                        src={jerryImage} 
                        alt="Jerry Wojenski" 
                        className="person-image"
                    />
                    <h3>Jerry Wojenski</h3>
                    <p>President</p>
                </div>
                <div className="person-card">
                    <img 
                        src={jamesImage} 
                        alt="James Guidi" 
                        className="person-image"
                    />
                    <h3>James Guidi</h3>
                    <p>Director Of Technology</p>
                </div>
                {/* <div className="person-card">
                <img 
                        src={andrienImage} 
                        alt="Andrien White" 
                        className="person-image"
                    />
                    <h3>Andrien White</h3>
                    <p>Business Development</p>
                </div> */}
                <div className="person-card">
                    <img 
                        src={stevenImage} 
                        alt="Steven Donovan" 
                        className="person-image"
                    />
                    <h3>Steven Donovan</h3>
                    <p>Director of Finance</p>
                </div>
            </div>
            {/* <div className="cta-container">
                <Link to="/properties" className="cta-button">
                    Check Out Our Properties
                    <span className="arrow">→</span>
                </Link>
            </div> */}
        </main>
    );
};

export default OurPeople; 