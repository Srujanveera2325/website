// client/src/pages/VolunteersPage.jsx
import React, { useState, useEffect } from 'react';
import { getVolunteers } from '../services/api';

function VolunteersPage() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await getVolunteers();
        setVolunteers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error("Error fetching volunteers:", err);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) { return <div>Loading volunteers...</div>; }
  if (error) { return <div>Error: {error.message}</div>; }

  return (
    <div>
      <h1>Volunteers</h1>
      <ul>
        {volunteers.map((volunteer) => (
          <li key={volunteer._id}>
            {/* Display volunteer information */}
            <p>Name: {volunteer.name}</p>
            <p>Email: {volunteer.email}</p>
            {/* ... other fields ... */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteersPage;