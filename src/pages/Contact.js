import React from 'react';
import '../styles/pages.css';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <main className="page">
            <h1>Contact Us</h1>
            <div className="contact-container">
                <div className="contact-list">
                    <div className="contact-item">
                        <h3>Jerry Wojenski</h3>
                        <p>President</p>
                        <a href="mailto:jerry.wojenski@hyperionrg.com">Jerry.Wojenski@hyperionrg.com</a>
                    </div>
                    <div className="contact-item">
                        <h3>James Guidi</h3>
                        <p>Director Of Technology</p>
                        <a href="mailto:james.guidi@hyperionreg.com">James.Guidi@hyperionrg.com</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;