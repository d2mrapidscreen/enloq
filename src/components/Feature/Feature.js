import React from 'react';
import './Feature.css';

const Feature = ({ 
  title, 
  subtitle,
  content, 
  image, 
  textPosition = 'left',
  backgroundColor = '#4CAF50'
}) => {
  return (
    <section className="feature-section" style={{ backgroundColor }}>
      <div className={`feature-container ${textPosition === 'right' ? 'reverse' : ''}`}>
        <div className="feature-text">
          <h2 className="feature-title">
            <span className="feature-title-light">{title}</span>
            <br />
            <span className="feature-title-dark">{subtitle}</span>
          </h2>
          <p className="feature-content">{content}</p>
        </div>
        <div className="feature-image-container">
          <img src={image} alt={title} className="feature-image" />
        </div>
      </div>
    </section>
  );
};

export default Feature;