// server/controllers/eventController.js
const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
  try {
    // TEMPORARY placeholder data - replace with database query later
    const events = [
      {
        _id: 'event4', // Keep IDs consistent
        title: 'Birthday Celebration',
        description:
          'Ms. Rajeshwari, a resident of Bangalore, celebrated her birthday at our old age home. She and her family spent the entire day with our residents and distributed groceries to our NGO.',
        date: new Date('2024-04-15T12:00:00Z'), // April 15, 2024
        location: 'Nisarga Charitable Trust Premises',
        image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404871/p4_ait8g5.png', // Add placeholder image
      },
      {
        _id: 'event1', // Keep IDs consistent
        title: 'Health Check-up Camp 🏥',
        description:
          'Regular health check-up camps are conducted in collaboration with healthcare professionals to monitor the well-being of our elderly residents. These include general check-ups, eye tests, diabetes screening, and physiotherapy sessions.',
        date: new Date('2025-07-10T09:00:00Z'), // July 10, 2025
        location: 'Nisarga Charitable Trust Premises',
        image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742405706/p1_knovhj.png', // Add placeholder image
      },
      {
          _id: 'event3', // Keep IDs consistent
          title: 'Intergenerational Meet-Up 👨‍👩‍👧‍👦',
          description:
            'Young students and professionals visit the old age home to spend time with the elderly, sharing experiences, learning new skills, and engaging in storytelling sessions.',
          date: new Date('2025-09-07T11:00:00Z'), // September 7, 2025
          location: 'Nisarga Charitable Trust Premises',
          image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404870/p1_urhiiw.png', // Add placeholder image
        },
      {
        _id: 'event2', // Keep IDs consistent
        title: 'Cultural Fest & Talent Show 🎭',
        description:
          'A fun-filled event where residents showcase their talents in music, dance, storytelling, and arts & crafts. Volunteers and guests join to celebrate the spirit of our senior citizens.',
        date: new Date('2025-10-24T14:00:00Z'), // October 24, 2025
        location: 'Nisarga Charitable Trust Auditorium',
        image: 'https://res.cloudinary.com/di63qkrvc/image/upload/v1742404870/p2_diepx4.png', // Add placeholder image
      },

    ];

    // Sort events by date (ascending)
    events.sort((a, b) => a.date - b.date); // IMPORTANT: This line is already correct

    res.json(events);

    // Original code (comment out for now):
    // const events = await Event.find().sort({ date: 1 }); // Use this when fetching from DB
    // res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new event (you'll need this later, even if you're not using it yet)
exports.createEvent = async (req, res) => {
  const event = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    image: req.body.image, // Add image handling later
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({message: 'Event not found'})
        }
        res.json(event)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}