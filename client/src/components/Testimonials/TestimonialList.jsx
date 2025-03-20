// client/src/components/Testimonials/TestimonialList.jsx
import React from 'react';
import TestimonialItem from './TestimonialItem'; // Make sure this import is correct
import './testimonials.scss';

function TestimonialList({ testimonials }) { // Receive testimonials as props
  return (
    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <TestimonialItem
          key={testimonial._id}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}

export default TestimonialList;