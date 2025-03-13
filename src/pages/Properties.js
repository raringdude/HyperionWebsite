import React from 'react';
import '../styles/pages.css';
import '../styles/Properties.css';

const Properties = () => {
    return (
        <main className="page">
            <h1>Properties</h1>
            <div className="properties-grid">
                <div className="property-card">
                    <div className="property-image"></div>
                    <h3>Property Name</h3>
                    <p>Location</p>
                </div>
                <div className="property-card">
                    <div className="property-image"></div>
                    <h3>Property Name</h3>
                    <p>Location</p>
                </div>
                <div className="property-card">
                    <div className="property-image"></div>
                    <h3>Property Name</h3>
                    <p>Location</p>
                </div>
            </div>
        </main>
    );
};

export default Properties; 