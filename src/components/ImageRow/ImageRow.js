import React from 'react';
import './ImageRow.css';

const ImageRow = ({ 
  images = [], 
  imagesPerRow = 3,
  headerImage = null, // Image to display at the top before intro sections
  introSections = [] // Array of intro sections, each with title and content
}) => {
  // Create rows of images based on imagesPerRow
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      // Slice the array to get only imagesPerRow items (or fewer for the last row)
      rows.push(images.slice(i, i + imagesPerRow));
    }
    return rows;
  };

  const rows = createRows();

  return (
    <div className="image-row-container">
      {/* Render header image if provided */}
      {headerImage && (
        <div className="header-image-container">
          <img 
            src={headerImage.src} 
            alt={headerImage.alt || 'Header image'} 
            className="header-image" 
          />
        </div>
      )}
      
      {/* Render intro sections if provided */}
      {introSections && introSections.length > 0 && (
        <div className="intro-sections">
          {introSections.map((section, index) => (
            <div key={index} className="intro-section">
              {section.title && (
                <h2 className="intro-title">{section.title}</h2>
              )}
              {section.content && (
                <p className="intro-content">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Render image grid */}
      {rows.map((rowImages, rowIndex) => (
        <div 
          key={rowIndex} 
          className="image-grid" 
          data-items-per-row={rowImages.length}
        >
          {rowImages.map((image, imageIndex) => (
            <div 
              key={`${rowIndex}-${imageIndex}`} 
              className="image-item" 
            >
              <div className="image-wrapper">
                <img 
                  src={image.src} 
                  alt={image.alt || `Image ${imageIndex + 1}`} 
                  className="grid-image" 
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageRow;