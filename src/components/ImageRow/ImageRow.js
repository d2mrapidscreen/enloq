import React from 'react';
import './ImageRow.css';

const ImageRow = ({ images = [], imagesPerRow = 3 }) => {
  // If we have more than imagesPerRow images, organize into multiple rows
  const organizeRows = () => {
    // Group images into rows of size imagesPerRow
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      rows.push(images.slice(i, i + imagesPerRow));
    }
    return rows;
  };

  const rows = organizeRows();

  return (
    <div className="image-row-container">
      {rows.map((rowImages, rowIndex) => (
        <div 
          key={rowIndex} 
          className="image-grid" 
          data-items-per-row={imagesPerRow}
        >
          {rowImages.map((image, imageIndex) => (
            <div 
              key={`${rowIndex}-${imageIndex}`} 
              className="image-item"
              style={{
                /* Add style to ensure even spacing between images */
                marginLeft: imageIndex === 0 ? 0 : '40px',
                marginRight: imageIndex === rowImages.length - 1 ? 0 : '40px'
              }}
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