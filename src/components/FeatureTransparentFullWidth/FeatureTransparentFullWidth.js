import React from 'react';
import './FeatureTransparentFullWidth.css';

const FeatureTransparentFullWidth = ({
  title,
  content,
  image1,
  image2,
  textPosition = 'left',
  imageCaption = null
}) => {
  return (
    <section className="feature-transparent-section">
      <div className="feature-transparent-container">
        <div className="feature-transparent-image-container">
          <img src={image1} alt={title} className="feature-transparent-image" />
        </div>
        <div className="feature-transparent-image-container">
          <img src={image2} alt={title} className="feature-transparent-image" />
        </div>
      </div>
      
      <div className="feature-transparent-content-wrapper">
        <div className={`feature-transparent-content-inner ${textPosition === 'right' ? 'right' : ''}`}>
          <div className="feature-transparent-text-container">
            <h2 className="feature-transparent-title">{title}</h2>
            <p className="feature-transparent-content">{content}</p>
            {imageCaption && (
              <p className="feature-transparent-image-caption">{imageCaption}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTransparentFullWidth;