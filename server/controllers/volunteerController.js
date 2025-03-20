// server/controllers/volunteerController.js
const Volunteer = require('../models/Volunteer');
const { validationResult } = require('express-validator');

// Get all volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find(); // Find all volunteers
    res.json(volunteers); // Send the volunteers as JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// Create a new volunteer
exports.createVolunteer = async (req, res) => {
    const errors = validationResult(req); // Get validation errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Return errors if any
    }
    const volunteer = new Volunteer({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message,
    });

    try {
      // Check if email already exists
      const existingVolunteer = await Volunteer.findOne({ email: req.body.email });
      if (existingVolunteer) {
        return res.status(400).json({ message: 'Email already registered.' });
      }

      const newVolunteer = await volunteer.save();
      res.status(201).json(newVolunteer);
    } catch (err) {
      res.status(400).json({ message: err.message }); // Or a more specific error
    }
};

// Get a single volunteer by ID
exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id); // Find by ID
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' }); // 404 Not Found
    }
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a volunteer
exports.updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
     if(!volunteer){
         return res.status(404).json({message: 'Volunteer not found'})
     }

     volunteer.name = req.body.name || volunteer.name;
     volunteer.email = req.body.email || volunteer.email;
     volunteer.phoneNumber = req.body.phoneNumber || volunteer.phoneNumber;
     volunteer.message = req.body.message || volunteer.message;

     const updatedVolunteer = await volunteer.save();
     res.json(updatedVolunteer)

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a volunteer
exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
     if(!volunteer){
         return res.status(404).json({message: 'Volunteer not found'});
     }
     res.json({message: 'Volunteer deleted'})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// ... (existing code) ...
const { body } = require('express-validator');

exports.createVolunteer = [
  // Validation and sanitization rules
  body('name', 'Name is required').trim().isLength({ min: 1 }).escape(),
  body('email', 'Invalid email').trim().isEmail().normalizeEmail(),
  body('phoneNumber', 'Invalid phone Number').trim().isLength({min: 10}).escape(),
  body('message', 'Message is required').trim().isLength({min: 1}).escape(),

  async (req, res) => {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const volunteer = new Volunteer({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      message: req.body.message,
    });

    try {
      // Check if email already exists
      const existingVolunteer = await Volunteer.findOne({ email: req.body.email });
      if (existingVolunteer) {
        return res.status(400).json({ message: 'Email already registered.' });
      }

      const newVolunteer = await volunteer.save();
      res.status(201).json(newVolunteer);
    } catch (err) {
      res.status(400).json({ message: err.message }); // Or a more specific error
    }
  }
];