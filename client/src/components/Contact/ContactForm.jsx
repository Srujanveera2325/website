import React, { useState } from 'react';
// import { createContact } from '../../services/api'; // You'll need an API function for this later

function ContactForm() {
    // ... (rest of your state variables and handleSubmit function) ...
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        setIsLoading(true);
        setSuccessMessage('');

        try {
            const contactData = { name, email, message };
        //    const response = await createContact(contactData); // Call your API function
            console.log('Message sent successfully:'); // Placeholder
            setSuccessMessage('Message sent successfully!');
            // Reset form
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.error('Contact form error:', err);
            // Handle errors (similar to DonationForm)
            if (err.response && err.response.data && err.response.data.errors) {
            // Validation errors from express-validator
            setErrors(err.response.data.errors.reduce((acc, error) => {
                acc[error.path] = error.msg;  // Use 'path' or 'param'
                return acc;
            }, {}));
            } else if (err.response && err.response.data && err.response.data.message) {
                //Other errors
                setErrors({ general: err.response.data.message });
            }else {
                setErrors({general: 'An unexpected error occurred.'})
            }
        } finally {
            setIsLoading(false);
        }
    };
  return (
    <div className="contact-container">
      <div className="contact-form">
        {/* Your existing form code (no changes needed here) */}
        <form onSubmit={handleSubmit}>
            {isLoading && <div>Loading...</div>}
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errors.general && <div style={{ color: 'red' }}>{errors.general}</div>}
            <div>
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                {errors.name && <div style={{color: 'red'}}>{errors.name}</div>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                />
                {errors.message && <div style={{color: 'red'}}>{errors.message}</div>}
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Address:</strong></p>
        <p>
          Nisarga Charitable Trust<br />
          150/1, Hosapalya, Kumbalgodu Road,<br />
          Bangalore – 560082
        </p>
        {/* Add the "Get Directions" link */}
        <p>
          <a
            href="https://www.google.com/maps/dir//Nisarga+charitable+trust+old+age+home,+150%2F1+hosapalya+Agara+village+Kanakapura+road,+post,+Thathaguni,+Bengaluru,+Karnataka+560082/@12.8724732,77.3947698,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae3dca7f47ae4d:0x19ae8084e366db53!2m2!1d77.516493!2d12.837732?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="directions-link"
          >
            👉 Get Directions to Nisarga Charitable Trust
          </a>
        </p>
        <p><strong>Phone Numbers:</strong></p>
        <p>
          📲 <a href="tel:+919740409523">+91 9740409523</a> / <a href="tel:+917676804443">+91 7676804443</a>
        </p>
        <p><strong>Email:</strong></p>
        <p>
          ✉️ <a href="mailto:nnisargacharitabletrust@gmail.com">nnisargacharitabletrust@gmail.com</a>
        </p>
        <p><strong>Social Media:</strong></p>
        <ul className="social-links">
          <li>
            <a href="https://www.facebook.com/people/Nagaraj-Nagaraj/61554854000668/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              {/* Facebook SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                <span className='social-media-name'>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nisargacharitabletrust/" target="_blank" rel="noopener noreferrer">
              {/* Instagram SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.44c.83 0 1.55.16 2.18.46a3 3 0 0 1 1.6.98 2.84 2.84 0 0 1 1 1.59c.28.63.44 1.35.44 2.18s-.16 1.55-.46 2.18a3 3 0 0 1-.98 1.6 2.84 2.84 0 0 1-1.59 1c-.63.28-1.35.44-2.18.44s-1.55-.16-2.18-.46a3 3 0 0 1-1.6-.98 2.84 2.84 0 0 1-1-1.59c-.28-.63-.44-1.35-.44-2.18s.16-1.55.46-2.18a3 3 0 0 1 .98-1.6 2.84 2.84 0 0 1 1.59-1c.63-.28 1.35-.44 2.18-.44M12 6.8a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4m0 2a3.2 3.2 0 1 1 0 6.4 3.2 3.2 0 0 1 0-6.4m4.8-4.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4"/></svg>
              <span className='social-media-name'>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PLsDnvEyf6_00NwCJWtFLzLXKc-X3iMek1" target="_blank" rel="noopener noreferrer">
              {/* YouTube SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              <span className='social-media-name'>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactForm;