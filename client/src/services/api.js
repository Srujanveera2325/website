// client/src/services/api.js
import axios from 'axios';

const api = axios.create({
baseURL: 'http://localhost:5000/api', // Development URL - change for production
});

export const getEvents = () => api.get('/events');
export const createEvent = (eventData) => api.post('/events', eventData);
export const getEventById = (id) => api.get(`/events/${id}`);

// Add other API functions as you create your backend routes

export const createDonation = (donationData) => api.post('/donations', donationData);

export const getGalleryImages = () => api.get('/gallery'); //for gallery

export const getTestimonials = () => api.get('/testimonials'); // for testimonials
// ...
export const createVolunteer = (volunteerData) => api.post('/volunteers', volunteerData);

export default api; // Export the axios instance for general use