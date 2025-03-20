import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
//import './Contact.css'; // Remove any inline styles or separate CSS files

function Contact() {
  return (
    <div className="container"> {/* Use the container class */}
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;