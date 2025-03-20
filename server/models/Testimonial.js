const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
  // Add other fields if needed (e.g., date, image URL)
}, {timestamps: true});

module.exports = mongoose.model('Testimonial', testimonialSchema);
