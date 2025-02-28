import React from 'react';
import './FeatureTransparentFullWidth.css';

const FeatureTransparentFullWidth = ({
  title,
  highlightedText, // New prop for the green part of the title
  content,
  image,
  textPosition = 'right', // Changed default to right based on image
  imageCaption = null,
  icons = []
}) => {
  // Split title if highlightedText is provided
  const renderTitle = () => {
    if (highlightedText && title.includes(highlightedText)) {
      const parts = title.split(highlightedText);
      return (
        <>
          {parts[0]}<span>{highlightedText}</span>{parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="feature-transparent-section">
      <div className="feature-transparent-background">
        <img src={image} alt={title} className="feature-transparent-image" />
      </div>
      
      <div className="feature-transparent-content-wrapper">
        <div className={`feature-transparent-content-inner ${textPosition}`}>
          <div className="feature-transparent-text-container">
            <h2 className="feature-transparent-title">{renderTitle()}</h2>
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