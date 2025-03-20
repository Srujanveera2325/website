// server/models/GalleryImage.js
const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true, // Image URL is required
  },
  altText: {
    type: String,
    required: true, // Alt text is required for accessibility
  },
  category: {
    type: String, // Optional: Add a category field for filtering
  },
  // Add other fields if needed (e.g., uploadDate, title, description)
}, { timestamps: true });

module.exports = mongoose.model('GalleryImage', galleryImageSchema);