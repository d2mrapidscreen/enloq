import React from 'react';
import './Event.css';

import event6Image from '../../assets/images/event_wimmera_field_days.png'
import event1Image from '../../assets/images/event_farm_world.png'
import event2Image from '../../assets/images/event_seymour_expo.png'
import event3Image from '../../assets/images/event_east_gippsland_field_days.png'
import event4Image from '../../assets/images/event_tocal_field_days.png'
import event5Image from '../../assets/images/event_norco_primex.png'


const Event = () => {
  const events = [
    {
      id: 6,
      title: '',
      details: '4-6 March 2025, Longerenong VIC',
      image: event6Image
    },
    {
      id: 1,
      title: '',
      details: '27- 29 March 2025, Lardner Park VIC',
      image: event1Image
    },
    {
      id: 2,
      title: '',
      details: '4 - 6 April 2025, Kings Park Seymour VIC',
      image: event2Image
    },
    {
      id: 3,
      title: '',
      details: '11-12 April 2025, Bairnsdale VIC',
      image: event3Image
    },
    {
      id: 4,
      title: '',
      details: '2-4 May 2025, Tocal NSW',
      image: event4Image
    },
    {
      id: 5,
      title: '',
      details: '15-17 May 2025, Casino NSW',
      image: event5Image
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