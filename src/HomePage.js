import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/weather?location=${location}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location">Enter a location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <button type="submit">Get weather</button>
    </form>
  );
}

export default HomePage;
