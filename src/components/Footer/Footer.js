import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@hyperion.com</p>
                    <p>Phone: (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                </div>
                <div className="footer-section">
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hyperion. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 