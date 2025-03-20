import React from 'react'

function TestimonialItem({testimonial}) {
  return (
    <div className='testimonial-item'>
        <p className="testimonial-type">{testimonial.type}</p>
        <p className="testimonial-text">"{testimonial.text}"</p>
        <h3 className="testimonial-author">— {testimonial.author}, {testimonial.role}</h3>
    </div>
  )
}

export default TestimonialItem