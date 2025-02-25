import React from 'react';
import './Feature.css';

const Feature = ({ 
  title, 
  subtitle,
  content, 
  image, 
  textPosition = 'left',
  backgroundColor = '#4CAF50',
  badge = null,
  showImage = true
}) => {
  return (
    <section className="feature-section">
      <div className="feature-section-inner" style={{ backgroundColor }}>
        <div className="feature-container">
          {badge && (
            <div className="feature-badge" style={{ right: textPosition === 'left' ? '40px' : 'auto', left: textPosition === 'right' ? '40px' : 'auto' }}>
              <span className="feature-badge-text">{badge}</span>
            </div>
          )}
          
          <div className={`feature-content-wrapper ${textPosition === 'right' ? 'reverse' : ''}`}>
            <div className="feature-text-container">
              <div className="feature-header">
                <h2 className="feature-title">
                  <span className="feature-title-light">{title}</span>
                  <span className="feature-title-dark">{subtitle}</span>
                </h2>
              </div>
              
              <div className="feature-body">
                <p className="feature-content">{content}</p>
              </div>
            </div>
            
            {showImage && (
              <div className="feature-image-container">
                <img src={image} alt={title} className="feature-image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;