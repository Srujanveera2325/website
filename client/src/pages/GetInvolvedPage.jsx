import React from 'react';
import VolunteerForm from '../components/GetInvolved/VolunteerForm';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function GetInvolvedPage() {
  return (
    <div className="container">
      <motion.section
        className="get-involved-hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Get Involved</h1>
        <p>
          Make a difference in the lives of our elderly residents. There are
          many ways to contribute!
        </p>
      </motion.section>

      <section className="get-involved-content">
        <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2, duration: 0.5}} className="volunteer-form-section">
          <h2>Become a Volunteer</h2>
          <p>
            Join our team of dedicated volunteers and help us provide a caring
            and supportive environment. Fill out the form below to express your
            interest.
          </p>
          <VolunteerForm />
        </motion.div>

        <motion.div initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} transition={{delay: 0.2, duration: 0.5}} className="other-ways-to-help">
          <h2>Other Ways to Help</h2>
          <p>
            Not able to volunteer your time? You can still make a significant
            impact!
          </p>
          <ul>
            <li>
              <span className="icon">
                {/* Placeholder for icon */}
                <i className="fas fa-hand-holding-heart"></i> {/* Example - Font Awesome */}
              </span>
              <Link to="/donate" className="help-link">
                Make a Donation
              </Link>
            </li>
            <li>
              <span className="icon">
                <i className="fas fa-handshake"></i> {/* Example - Font Awesome */}
              </span>
              <Link to="/contact" className="help-link">
                Contact Us for Partnerships
              </Link>
            </li>
            {/* Add more ways to help as needed */}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

export default GetInvolvedPage;