// server/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true
  }
  // Add other fields as needed (e.g., location, image URL, etc.)
});

module.exports = mongoose.model('Event', eventSchema);