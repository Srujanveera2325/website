// client/src/components/Home/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Get Involved</h2>
        <p>
          Make a difference today! Support our cause by donating or
          becoming a volunteer.
        </p>
        <div className="cta-buttons">
          <Link to="/donate" className="cta-button donate-button">
            Donate Now
          </Link>
          <Link to="/get-involved" className="cta-button volunteer-button">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;