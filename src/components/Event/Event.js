import React from 'react';
import './Event.css';

const Event = () => {
  const events = [
    {
      id: 1,
      title: 'Event title',
      details: 'Dates and address etc',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Event title',
      details: 'Dates and address etc',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Event title',
      details: 'Dates and address etc',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Event title',
      details: 'Dates and address etc',
      image: '/api/placeholder/300/200'
    }
  ];

  const handleDownload = () => {
    console.log('Download brochure clicked');
  };

  return (
    <section className="event-section">
      <div className="event-header">
        <h2 className="event-title">
          <span className="event-title-dark">COME SEE </span>
          <span className="event-title-green">US LIVE</span>
          <span className="event-title-dark"> AT A </span>
          <span className="event-title-green">FIELD DAY EVENT</span>
        </h2>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image-container">
              <img src={event.image} alt={event.title} className="event-image" />
            </div>
            <h3 className="event-card-title">{event.title}</h3>
            <p className="event-card-details">{event.details}</p>
          </div>
        ))}
      </div>

      <div className="event-button-container">
        <button className="event-button" onClick={handleDownload}>
          DOWNLOAD THE BROCHURE
        </button>
      </div>
    </section>
  );
};

export default Event;