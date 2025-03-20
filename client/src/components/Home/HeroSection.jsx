import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="hero">
      {/* Add the image here, with the correct URL */}
      <img src="https://res.cloudinary.com/di63qkrvc/image/upload/v1742403551/p1_xo8xms.png" alt="Nisarga Charitable Trust" className="hero-image" />
      <div className="hero-content"> {/* Add a container for text content */}
        <h2>Making a Difference, One Life at a Time</h2>
        <p>We are dedicated to providing compassionate care and a loving home for the elderly.</p>
        <div className="cta-buttons">
          <Link to="/donate" className="cta-button donate-button">
            Donate Now
          </Link>
          <Link to="/get-involved" className="cta-button volunteer-button">
            Volunteer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;