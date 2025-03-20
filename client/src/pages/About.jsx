import React from 'react';
import { motion } from 'framer-motion';

function About() {
  // Placeholder data for team members.  Later, you'll fetch this from your backend.
  const teamMembers = [
    {
      id: 1,
      name: 'Nagaraj',
      role: 'President & Founder',
      description:
        'Nagaraj is the driving force behind Nisarga Charitable Trust. With a vision to support and uplift senior citizens, he has been actively working to provide them with a comfortable and dignified life.',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 2,
      name: 'Mallikarjun',
      role: 'Secretary',
      description:
        'Mallikarjun plays a crucial role in overseeing the administrative and operational aspects of the trust, ensuring that all activities run smoothly and effectively.',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
    },
  ];

    // Placeholder data for values section
    const valuesData = [
      {
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.384 5.534-4.217.434 4.07c-.428.66-.566 1.567-.4 2.475.15.823.466 1.463.9 2.068.465.655 1.658 2.144 2.817 3.723 1.264 1.724 2.334 4.11 2.334 4.11s.97-2.29 2.122-3.943c1.107-1.59 2.174-3.017 2.68-4.385.508-1.377.64-2.95.39-3.977-.26-.875-.936-1.44-1.603-1.605a4.6 4.6 0 0 0-2.261-.003l-.009.003a3.58 3.58 0 0 0-1.713 1.118c-.498.787-.848 1.752-.872 2.592h-.013l-.004.241.016.246.04.162.037.123.172.406 1.276 3.804 1.843 5.434-6.467 6.913-8.093 4.145z"/>
              </svg>
          ),
          title: 'Compassion',
          description: 'We treat every resident with kindness, empathy, and respect, ensuring they feel loved and cared for.'
      },
      {
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" >
                  <path fillRule="evenodd" d="M15.188,16.449l-10-13A1,1,0,0,0,3.553,4.5l10,13a1,1,0,0,0,.811.449A1,1,0,0,0,15,18a1,1,0,0,0,.188-1.551ZM5.212,4.865,14.551,17H5.212ZM19,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19A3,3,0,0,1,19,22ZM19,4H5A1,1,0,0,0,4,5V19a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V5A1,1,0,0,0,19,4Z"/>
              </svg>
          ),
          title: 'Dignity',
          description: 'We believe every individual deserves to live with self-respect, independence, and honor.'
      },
      {
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM16.42,7.69,15,9.1,13.6,7.69A1,1,0,0,0,12.31,7l-2,2.73a1,1,0,0,0,0,1.43l2.59,3.56a1,1,0,0,0,1.2,0l2.72-2.72a1,1,0,0,0,0-1.41L14.87,9.13,16.3,7.72A1,1,0,0,0,16.42,7.69ZM11.41,15.27a1,1,0,0,0,1.41-1.41l-1.3-1.73L9.4,9.55,11,7.69,12,9.12l-1.29,1.76,1.74,2.39A1,1,0,0,0,11.41,15.27Z"/>
              </svg>
          ),
          title: 'Integrity',
          description: 'We uphold transparency, honesty, and ethical practices in everything we do.'
      },
      {
          icon: (
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor" >
                  <path d="M19,20H5V9H7V7H5A2,2,0,0,0,3,9V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V9a2,2,0,0,0-2-2H17V9h2ZM5,4h8v4H5Zm5,13v2H7V17Zm0-3v2H6V14Zm5,3v2H12V17Zm0-3v2H11V14Zm7,3v2H17V17Zm-1-3v2H16V14ZM17,9v2H15V9Zm-5-4A2,2,0,0,1,14,7V9H10V7A2,2,0,0,1,12,5Z"/>
              </svg>
          ),
          title: 'Empowerment',
          description: 'We encourage senior citizens to engage in activities that enhance their mental, emotional, and social well-being.'
      },
      {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,13a1,1,0,0,0-1,1v3H13V14a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v3H7V14a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v8H5V18H7v4H9V18h2v4h2V18h2V22h2V18h2V14A1,1,0,0,0,18,13Zm0,3H15V14h1Zm-4,0H11V14h1Zm-4,0H7V14H8ZM21,8H19V9a1,1,0,0,0-2,0v1H15V9a1,1,0,0,0-2,0v1H11V9A1,1,0,0,0,9,10v1H7V9A1,1,0,0,0,5,10v1H3V8H21ZM17,6H7V5H17Z"/>
            </svg>
          ),
          title: 'Community',
          description: 'We foster a family-like atmosphere where staff, volunteers, and residents support and uplift each other.'
      },
      {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM17,7H15V17h2Zm-4,0H11V17h2ZM9,7H7V17H9Z"/>
            </svg>
          ),
          title: 'Service',
          description: 'Our work is driven by the commitment to serve humanity selflessly, ensuring that no elderly person feels abandoned or neglected.'
      },
  ];
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us – Nisarga Charitable Trust
      </motion.h1>

      <motion.section
        className="about-section mission-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2>Our Mission</h2>
        <p>
          At Nisarga Charitable Trust, our mission is to provide a safe,
          compassionate, and nurturing environment for elderly individuals who
          need care and support. We are dedicated to improving their quality of
          life by offering shelter, healthcare, emotional well-being, and
          companionship. Our goal is to create a community where senior citizens
          feel valued, respected, and loved, ensuring they live with dignity in
          their golden years.
        </p>
        <p>
          We strive to bridge the gap between elderly care and social
          responsibility by encouraging volunteer participation and fostering
          intergenerational connections. Through various initiatives, we aim to
          enhance their physical, emotional, and mental well-being, making their
          later years fulfilling and peaceful.
        </p>
      </motion.section>

      <motion.section
        className="about-section team-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="about-section values-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2>Our Values</h2>
        <ul className="values-list">
          {valuesData.map((value, index) => (
            <li key={index}>
              <div className="value-icon">{value.icon}</div>
              <div>
                <span className="value-title">{value.title}</span>
                <p>{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

export default About;