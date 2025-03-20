// server/routes/events.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// GET all events
router.get('/', eventController.getAllEvents);

// POST a new event
router.post('/', eventController.createEvent); //  Correct function name?

// GET event by ID
router.get('/:id', eventController.getEventById);

module.exports = router;