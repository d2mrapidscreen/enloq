import React from 'react';
import './FeatureTransparentFullWidth.css';

const FeatureTransparentFullWidth = ({
  title,
  content,
  image,
  textPosition = 'left',
  imageCaption = null,
  icons = []
}) => {
  return (
    <section className="feature-transparent-section">
      <div className="feature-transparent-background">
        <img src={image} alt={title} className="feature-transparent-image" />
      </div>
      
      <div className="feature-transparent-content-wrapper">
        <div className={`feature-transparent-content-inner ${textPosition === 'right' ? 'right' : ''}`}>
          <div className="feature-transparent-text-container">
            <h2 className="feature-transparent-title">{title}</h2>
            <p className="feature-transparent-content">{content}</p>
            
            {imageCaption && (
              <p className="feature-transparent-image-caption">{imageCaption}</p>
            )}
            
            {icons.length > 0 && (
              <div className="feature-icons">
                {icons.map((icon, index) => (
                  <img key={index} src={icon} alt="Feature icon" className="feature-icon" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTransparentFullWidth;