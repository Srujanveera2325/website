// client/src/components/GetInvolved/VolunteerForm.jsx

import React, { useState } from 'react';
// import { createVolunteer } from '../../services/api'; // Import when backend is ready

function VolunteerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    setIsLoading(true);
    setSuccessMessage('');

    try {
      const volunteerData = { name, email, message };
    //   const response = await createVolunteer(volunteerData); // Call API when ready
    //   console.log('Volunteer registration successful:', response.data);
      setSuccessMessage('Thank you for your interest! We will be in touch.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Volunteer form error:', err);
      // Handle errors (as in DonationForm and ContactForm)
      if (err.response && err.response.data && err.response.data.errors) {
        // Validation errors from express-validator
        setErrors(err.response.data.errors.reduce((acc, error) => {
          acc[error.path] = error.msg;  // Use 'path' or 'param'
          return acc;
        }, {}));
      } else if (err.response && err.response.data && err.response.data.message) {
          //Other errors
          setErrors({ general: err.response.data.message });
      }else {
          setErrors({general: 'An unexpected error occurred.'})
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {isLoading && <div>Loading...</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
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
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Tell us why you want to volunteer"
        />
        {errors.message && <div className="error-message">{errors.message}</div>}
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
            <>
                <span className="spinner"></span> Submitting...
            </>
        ) : (
          'Volunteer'
        )}
      </button>
    </form>
  );
}

export default VolunteerForm;