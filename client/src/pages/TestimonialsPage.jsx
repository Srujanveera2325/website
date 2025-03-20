// client/src/pages/TestimonialsPage.jsx
import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../services/api';
import Slider from 'react-slick'; // Import react-slick
import "slick-carousel/slick/slick.css";  // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme
import TestimonialItem from '../components/Testimonials/TestimonialItem'; // Import
import '../components/Testimonials/testimonials.scss';

function TestimonialsPage() {
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


   // react-slick settings
   const settings = {
    dots: true,          // Show navigation dots
    infinite: true,     // Loop through testimonials
    speed: 500,         // Transition speed in milliseconds
    slidesToShow: 1,     // Show one testimonial at a time
    slidesToScroll: 1,  // Scroll one testimonial at a time
    autoplay: true,     // Automatically advance slides
    autoplaySpeed: 5000, // Time between slides (5 seconds)
    adaptiveHeight: true, // Adjust height to content
    responsive: [   //Add media queries to ensure good responsive in all displays
      {
        breakpoint: 768,   // Smaller screens
        settings: {
          arrows: false, //On smaller screens we will hide the arrows.
        }
      }
    ]
  };


  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  if (error) {
    return <div>Error loading testimonials: {error.message}</div>;
  }

  return (
    <div className="container">
      <h1>Testimonials</h1>
      <p>See what people are saying about our work.</p>
      <Slider {...settings}>  {/*  Use the Slider component */}
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial._id} testimonial={testimonial}/>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsPage;