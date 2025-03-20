// server/routes/volunteers.js

const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');
const { body, validationResult } = require('express-validator'); // ADD THIS LINE

// ... (rest of your routes) ...

// @route   GET /api/volunteers
// @desc    Get all volunteers
// @access  Public
router.get('/', volunteerController.getAllVolunteers);

// @route   POST /api/volunteers
// @desc    Create a new volunteer
// @access  Public
router.post('/', volunteerController.createVolunteer);

// @route   GET /api/volunteers/:id
// @desc    Get a single volunteer by ID
// @access  Public
router.get('/:id', volunteerController.getVolunteerById);

// @route   PUT /api/volunteers/:id
// @desc    Update a volunteer
// @access  Public (or restricted with authentication)
router.put('/:id', volunteerController.updateVolunteer);

// @route   DELETE /api/volunteers/:id
// @desc    Delete a volunteer
// @access  Public (or restricted with authentication)
router.delete('/:id', volunteerController.deleteVolunteer);

module.exports = router;

    // server/routes/volunteers.js

    // ... (previous code) ...
    router.post('/', [ // Wrap the validation and handler in an array
        // Validation and sanitization rules
        body('name', 'Name is required').trim().isLength({ min: 1 }).escape(),
        body('email', 'Invalid email').trim().isEmail().normalizeEmail(),
        body('phoneNumber', 'Invalid phone Number').trim().isLength({min: 10}).escape(),
        body('message', 'Message is required').trim().isLength({min: 1}).escape(),
      ], volunteerController.createVolunteer); // Use the validation middleware
  
      module.exports = router;