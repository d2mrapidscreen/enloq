import React from 'react';
import './ImageRow.css';

const ImageRow = ({ images = [], imagesPerRow = 3 }) => {
  return (
    <div className="image-row-container">
      <div className="image-grid" style={{ '--images-per-row': imagesPerRow }}>
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <div className="image-wrapper">
              <img src={image.src} alt={image.alt || `Image ${index + 1}`} className="grid-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageRow;