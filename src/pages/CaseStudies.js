import React, { useState } from 'react';
import '../styles/pages.css';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
    const [isShowingDetails, setIsShowingDetails] = useState(false);

    const handleClick = () => {
        setIsShowingDetails(!isShowingDetails);
    };

    return (
        <main className="page">
        
            <div className="case-study-container">
                <div 
                    className={`case-study-box ${isShowingDetails ? 'showing-details' : ''}`}
                    onClick={handleClick}
                >
                    <div className="case-study-title-bar">
                        <h2>123 Main Street Development</h2>
                    </div>
                    <div className="case-study-details">
                        <h3>Multi-Family Development Project</h3>
                        <p>A strategic redevelopment of an existing property into a modern, 
                           sustainable multi-family complex. This project showcases our commitment 
                           to creating value while maintaining community character.</p>
                        <ul>
                            <li>Total Units: 150</li>
                            <li>Investment: $45M</li>
                            <li>ROI: 22%</li>
                            <li>Timeline: 18 Months</li>
                            <li>Completion: Q4 2023</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CaseStudies; 