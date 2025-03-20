 // server/routes/donations.js
 const express = require('express');
 const router = express.Router();
 const donationController = require('../controllers/donationController'); // Import controller
 const { body, validationResult } = require('express-validator'); // Import express-validator


 // POST a new donation (Handles form submissions)
 router.post(
   '/',
   [
     // Validation rules
     body('name', 'Name is required').trim().isLength({ min: 1 }).escape(),
     body('email', 'Invalid email').trim().isEmail().normalizeEmail(),
     body('phone', 'Phone number is required').trim().isLength({ min: 1 }).escape(), // Basic phone validation
     // Add more validation rules as needed (e.g., for phone number format)
   ],
   donationController.createDonation // Your controller function
 );
 router.get('/', (req, res) => {
    res.json({ message: 'Get all donations - Placeholder' });
  });
 module.exports = router;