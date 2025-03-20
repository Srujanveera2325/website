import React, { useState } from 'react';
import DonationForm from '../components/Donation/DonationForm';
import { motion } from 'framer-motion';
//import { useNavigate } from 'react-router-dom'; No Need.

function Donate() {
  // const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // Add this state

  const handleHeroButtonClick = () => {
    setShowForm(true);  // Show the form when hero button is clicked.
      const formElement = document.getElementById('donation-form-container');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const onFormSubmitSuccess = () => {
      //Removed formSubmitted state variable.
  };


  return (
    <div className="container">
        {/* Hero section remains at the top */}
      <motion.section // Animate the hero section
        className="donate-hero"
        initial={{ opacity: 0, y: -30 }} // Start slightly above and faded
        animate={{ opacity: 1, y: 0 }}      // Fade in and move down
        transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      >
        <h1>Support Nisarga Charitable Trust</h1>
        <p>Your generosity provides care and a loving home for our elderly residents.</p>
        <button className="hero-donate-button" onClick={handleHeroButtonClick}>
          Donate Now
        </button>
      </motion.section>

      <section className="donation-content">
        <motion.div
            id="donation-form-container" // Add an ID for scrolling
            className="donation-form-container"
            initial={{opacity: 0, x: -20}}  // Initial position (slightly to the left)
            animate={{opacity: 1, x: 0}}      // Animate to centered position
            transition={{delay: 0.2, duration: 0.5}}      // Delay and duration
        >
          <h2>Make a Donation</h2>
            {/* Pass the onFormSubmitSuccess function as a prop */}
            {showForm && <DonationForm onFormSubmitSuccess={onFormSubmitSuccess} />}
        </motion.div>
      </section>
    </div>
  );
}

export default Donate;