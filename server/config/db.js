// server/config/db.js (TEMPORARY - for debugging)
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // HARDCODE your connection string here (temporarily
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;