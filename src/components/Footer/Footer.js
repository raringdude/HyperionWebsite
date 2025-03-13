import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: info@hyperionrg.com</p>
                    <p></p>
                </div>
                <div className="footer-section">
                    <h3>Find Us</h3>
                    <a href="https://www.facebook.com/profile.php?id=61573758227504&mibextid=wwXIfr&rdid=bxuLU6iWBZyRefEy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15tnSsiVhc%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer"><p>Facebook</p></a>
                    <a href="https://www.linkedin.com/company/hyperion-residential/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><p>LinkedIn</p></a>
                    
                </div>
                <div className="footer-section">
                   
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Hyperion Residential Group. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 