
// server/models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Example: unique email
  phoneNumber: { type: String },
  message: { type: String },
}, { timestamps: true }); // Add timestamps (createdAt, updatedAt)

module.exports = mongoose.model('Volunteer', volunteerSchema);