import React, { useState } from 'react';

function EventItem({ event }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const shortDescriptionLength = 150; // Increased for slightly longer preview

  return (
    <li className="event-item">
      <div className="event-image-container">
        <img src={event.image} alt={event.title} className="event-image" />
      </div>
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>
          {showFullDescription
            ? event.description
            : event.description.substring(0, shortDescriptionLength) +
              (event.description.length > shortDescriptionLength ? '...' : '')}
        </p>
        {event.description.length > shortDescriptionLength && (
          <button
            className="read-more-button"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        )}
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString('en-GB')}</p> {/* DD/MM/YYYY */}
        <p><strong>Location:</strong> {event.location}</p>
      </div>
    </li>
  );
}

export default EventItem;