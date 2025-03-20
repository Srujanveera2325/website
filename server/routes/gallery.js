// server/routes/gallery.js
const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const multer = require('multer');
const cloudinary = require('../config/cloudinary'); // Import
const { CloudinaryStorage } = require('multer-storage-cloudinary'); // Import

// Configure Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'gallery', // Optional: specify a folder in your Cloudinary account
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'], // Optional: restrict allowed file types
  },
});

const upload = multer({ storage: storage });
// GET all gallery images
router.get('/', galleryController.getAllImages);

// POST a new gallery image (Handles uploads)
router.post('/', upload.single('image'), galleryController.createImage); // Correct

module.exports = router;