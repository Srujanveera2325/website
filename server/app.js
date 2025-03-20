const express = require('express');
    const connectDB = require('./config/db');
    const cors = require('cors');
    require('dotenv').config({ path: '../.env' });

    const app = express();

    // Connect Database
    connectDB();

    // Init Middleware
    app.use(cors()); // Enable CORS for all origins (configure as needed)
    app.use(express.json({ extended: false })); // Parse JSON request bodies

    // Define Routes
    app.use('/api/donations', require('./routes/donations'));
    app.use('/api/events', require('./routes/events')); // Use the events routes
    app.use('/api/volunteers', require('./routes/volunteers')); // If you have it
    app.use('/api/gallery', require('./routes/gallery'));
    app.use('/api/testimonials', require('./routes/testimonials'));
    // ... other routes

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));