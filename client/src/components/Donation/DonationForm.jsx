import React, { useState } from 'react';
import { createDonation } from '../../services/api'; // Import createDonation
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function DonationForm({ onFormSubmitSuccess }) { // Receive the prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // Get the navigate function

    // Preset donation amounts
    //const presetAmounts = [500, 1000, 2500, 5000];

    // Function to handle preset amount selection
    //const handlePresetClick = (presetAmount) => {
    //    setAmount(String(presetAmount)); // Update the custom amount input
    //    setSelectedPreset(presetAmount);  // Set the selected preset
   // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setIsLoading(true);
    setSuccessMessage('');
    // Validate the form *before* attempting submission
        if (!validateForm()) {
        setIsLoading(false); // Stop loading if validation fails
        return; // Prevent submission
        }

    try {
      const donationData = { name, email, phone };

        // Simulate a successful API call.
        await new Promise((resolve) => setTimeout(resolve, 500));
        onFormSubmitSuccess();

      // Pass the donationData to the /donation-success route
        navigate('/donation-success', { state: { donationData } });

    } catch (err) {
      console.error('Donation error:', err);
        if (err.response && err.response.data && err.response.data.errors) {
            // If the server returned validation errors
            setErrors(err.response.data.errors.reduce((acc, error) => {
                acc[error.path] = error.msg; // Use 'path' or 'param' to identify the field
                return acc;
            }, {}));
        } else if (err.response && err.response.data && err.response.data.message) {
            // Handle other error messages from the server
            setErrors({ general: err.response.data.message });
        } else {
            // Handle network or other unexpected errors
            setErrors({ general: 'An unexpected error occurred.' });
        }
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    }

    setErrors(newErrors);
     // Update the form's validity state
    return isValid;
  };

  return (
    <motion.form
        onSubmit={handleSubmit}
        noValidate  //We are handling validation ourselves.
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }}    // Animate to this state
        transition={{ duration: 0.5 }}   // Animation duration
        >
        {isLoading && <div className="loading-overlay">Loading...</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {errors.general && <div className="error-message">{errors.general}</div>}

      <div>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter your name"
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="phone">Phone *</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Enter your phone number"
        />
        {errors.phone && <div className="error-message">{errors.phone}</div>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? (
            <>
                <span className="spinner"></span> Submitting...
            </>
        ) : (
          'Donate'
        )}
      </button>
    </motion.form>
  );
}

export default DonationForm;