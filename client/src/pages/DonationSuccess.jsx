import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function DonationSuccess() {
  const location = useLocation(); // Get the location object
  const donationData = location.state?.donationData || {}; // Access the passed data

  // Provide default values if donationData is undefined or null
  const name = donationData.name || 'Guest'; // Default to 'Guest' if name is missing
  const email = donationData.email || 'No email provided'; // Provide a fallback

  return (
    <div className="container">
      <motion.section
        className="donation-success"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1>Thank You for Your Donation!</h1>
        <p className="success-message">
          Your generosity will make a significant difference in the lives of
          our elderly residents. We deeply appreciate your support.
        </p>

        <div className="donation-details">
          {/* Confirmation Details */}
          <div className="confirmation-details">
            <h2>Donation Details (Confirmation)</h2>
            <ul>
              <li><strong>Name:</strong> {name}</li>
              <li><strong>Email:</strong> {email}</li>
            </ul>
            <p>A confirmation email has been sent to <em>{email}</em>.</p>
          </div>

          {/* Payment Details - Presented as Cards */}
          <div className="donation-methods">
          <h2>Payment Details</h2>
            <div className="bank-details">
              <h3>Bank Account Details</h3>
                <div className='bank-details-content'>
                    <p><strong>UPI ID:</strong> 7676804443@axl</p>
                    <p><strong>Account No.:</strong> 920020065489494</p>
                    <p><strong>Bank Name:</strong> Axis Bank, 8th Mile, T Dasarahalli</p>
                    <p><strong>IFSC Code:</strong> UTIB0002926</p>
                </div>
            </div>

            <div className="qr-code-section">
              <h3>Scan to Donate (UPI)</h3>
              <img
                src="https://res.cloudinary.com/di63qkrvc/image/upload/v1740911603/scannee_xouqba.png"  // YOUR QR CODE URL
                alt="QR Code for UPI Payment"
                className="qr-code"
              />
              <p className="qr-code-note">
                Use PhonePe, Google Pay, or other UPI apps.
              </p>
            </div>
            <div className="donation-impact">
                <h3>How Your Donation Helps</h3>
                <ul>
                <li><strong>₹500:</strong> Provides nutritious meals for a week.</li>
                <li><strong>₹1000:</strong> Supports medical check-ups and essential medicines.</li>
                <li><strong>₹2500:</strong> Contributes to recreational activities and social events.</li>
                <li><strong>₹5000:</strong> Helps maintain our facilities and ensure a comfortable environment.</li>
                </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default DonationSuccess;