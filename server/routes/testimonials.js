// server/routes/testimonials.js
const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController'); // Correct path?

// GET all testimonials
router.get('/', testimonialController.getAllTestimonials);

// POST a new testimonial (you'll likely add authentication/authorization later)
router.post('/', testimonialController.createTestimonial); // Correct function name?

module.exports = router;