// server/controllers/testimonialController.js
// const Testimonial = require('../models/Testimonial'); // TEMPORARILY COMMENT OUT

// Get all testimonials (TEMPORARY - Return Placeholder Data)
exports.getAllTestimonials = async (req, res) => {
  try {
    // Replace this with actual data fetching from the database later
    const placeholderTestimonials = [
      {
        _id: '1',
        author: 'Mr. Ramesh Kumar',
        role: 'Resident', // ADDED ROLE
        text: 'Staying at Nisarga Charitable Trust has been a blessing. The staff is caring, and I feel at home.',
        type: 'Resident Testimonial', // ADDED TYPE
      },
      {
        _id: '2',
        author: 'Ms. Priya Mehta',
        role: 'Daughter of a Resident', // ADDED ROLE
        text: 'My father has found a peaceful and loving environment here. The facilities and medical care are excellent.',
        type: 'Family Member Testimonial', // ADDED TYPE
      },
      {
        _id: '3',
        author: 'Rahul Sharma',
        role: 'Volunteer', // ADDED ROLE
        text: 'Working as a volunteer here has been a fulfilling experience. The elderly are full of wisdom, and I love spending time with them.',
        type: 'Volunteer Testimonial', // ADDED TYPE
      },
    ];
    res.json(placeholderTestimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new testimonial (you might not need this immediately)
exports.createTestimonial = async(req, res) => { // Use 'exports.'
    const testimonial = new Testimonial({
        author: req.body.author,
        text: req.body.text,
        role: req.body.role,
        type: req.body.type
    })
    try {
        const newTestimonial = await testimonial.save();
        res.status(201).json(newTestimonial)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// Add other controller functions (getById, update, delete) later if needed