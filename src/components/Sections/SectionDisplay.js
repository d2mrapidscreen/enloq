import React from 'react';
import './Applications.css';

const SectionDisplay = ({ items, backgroundColor, sectionClassName }) => {
  return (
    <section className={sectionClassName || "applications-section"} style={{ backgroundColor }}>
      {items.map((item) => (
        <div key={item.id} className={`application-item ${item.position === 'right' ? 'reverse' : ''}`}>
          <div className="application-image-container">
            {item.showBadge && (
              <div className="application-badge">
                <span className="application-title">{item.title}</span>
              </div>
            )}
            <img src={item.image} alt={item.title} className="application-image" />
          </div>
          <div className="application-content">
            <h3 className="application-heading">{item.heading}</h3>
            <p className="application-text">{item.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionDisplay;