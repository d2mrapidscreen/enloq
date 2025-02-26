import React from 'react';
import './ImageRow.css';

const ImageRow = ({ images = [], imagesPerRow = 3 }) => {
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