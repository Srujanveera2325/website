// client/src/pages/EventsPage.jsx
import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/api';
import EventList from '../components/Events/EventList';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEvents();
        setEvents(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error loading events: {error.message}</div>;
  }

  return (
    <div className="container"> {/* Use container class */}
      <h1>Events</h1>
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;