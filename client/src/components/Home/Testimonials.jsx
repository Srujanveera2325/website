import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../../services/api'; // Import API function
import TestimonialItem from '../Testimonials/TestimonialItem'; // Import
import '../../styles/components/Testimonials/testimonials.scss'

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        setTestimonials(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching testimonials:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>; // Or a more sophisticated loading indicator
  }

  if (error) {
    return <div>Error loading testimonials: {error.message}</div>;
  }

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial._id} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;