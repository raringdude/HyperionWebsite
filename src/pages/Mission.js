import React from 'react';
import '../styles/pages.css';
import '../styles/Mission.css';

const Mission = () => {
    return (
        <main className="page">
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-image placeholder">
                        {/* Placeholder div instead of img */}
                    </div>
                    <div className="mission-content">
                        <h2>Our Mission</h2>
                        <p>
                            At Hyperion Residential Group, we are dedicated to transforming student housing through innovative solutions and exceptional service. Our mission is to create vibrant, comfortable, and sustainable living spaces that enhance the college experience.
                        </p>
                        <p>
                            We believe in building communities that foster academic success, personal growth, and lasting connections. Through strategic property management and a commitment to excellence, we're setting new standards in student living.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mission; 