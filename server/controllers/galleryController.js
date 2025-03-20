// server/controllers/galleryController.js
// const GalleryImage = require('../models/GalleryImage'); // TEMPORARILY COMMENT OUT
const multer = require('multer');
// const cloudinary = require('../config/cloudinary'); // TEMPORARILY COMMENT OUT for local storage
// const { CloudinaryStorage } = require('multer-storage-cloudinary'); // TEMPORARILY COMMENT OUT

// Use local storage (temporarily)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists!
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Get all gallery images (TEMPORARY - Return Placeholder Data)
exports.getAllImages = async (req, res) => {
  try {
    // Replace this with actual data fetching from the database later
    const placeholderImages = [
      {
        _id: '1',
        imageUrl: 'https://picsum.photos/id/10/300/200',
        altText: 'Placeholder Image 1',
      },
      {
        _id: '2',
        imageUrl: 'https://picsum.photos/id/20/300/200',
        altText: 'Placeholder Image 2',
      },
      {
        _id: '3',
        imageUrl: 'https://picsum.photos/id/30/300/200',
        altText: 'Placeholder Image 3',
      },
      {
        _id: '4',
        imageUrl: 'https://picsum.photos/id/40/300/200',
        altText: 'Placeholder Image 4',
      },
      {
        _id: '5',
        imageUrl: 'https://picsum.photos/id/50/300/200',
        altText: 'Placeholder Image 5',
      },
      {
        _id: '6',
        imageUrl: 'https://picsum.photos/id/60/300/200',
        altText: 'Placeholder Image 6',
      },
    ];
    res.json(placeholderImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Create a new gallery image (Handles uploads)
 exports.createImage =  upload.single('image'), async (req, res) => { // Use upload middleware
          try {
            if (!req.file) {
              return res.status(400).json({ message: 'No image file provided.' });
            }

            // Create a new image document in the database
            const newImage = new GalleryImage({
              imageUrl: req.file.path, // Use Cloudinary URL
              altText: req.body.altText,
              category: req.body.category, // Optional
            });

            const savedImage = await newImage.save();
            res.status(201).json(savedImage);
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error uploading image.', error: err.message });
          }
        };