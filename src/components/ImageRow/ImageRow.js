import React, { useState } from 'react';
import './ImageRow.css';

const ImageRow = ({ 
  images = [], 
  imagesPerRow = 3,
  headerImage = null, // Image to display at the top before intro sections
  introSections = [] // Array of intro sections, each with title and content
}) => {
  // State for modal/popup
  const [modalImage, setModalImage] = useState(null);

  // Create rows of images based on imagesPerRow
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      // Slice the array to get only imagesPerRow items (or fewer for the last row)
      rows.push(images.slice(i, i + imagesPerRow));
    }
    return rows;
  };

  // Handle image click based on action type
  const handleImageClick = (image) => {
    if (!image.action) return; // No action defined
    
    switch (image.action.type) {
      case 'popup':
        // Open the image in a modal
        setModalImage(image);
        break;
      case 'download':
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = image.action.url || image.src;
        link.download = image.action.filename || 'download';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;
      default:
        // Do nothing for undefined actions or 'none' type
        break;
    }
  };

  // Close the modal
  const closeModal = () => {
    setModalImage(null);
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
              <div 
                className={`image-wrapper ${image.action ? 'clickable' : ''}`}
                onClick={() => handleImageClick(image)}
                title={image.action ? image.action.tooltip || '' : ''}
              >
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

      {/* Modal/Popup for enlarged images */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalImage.action.largeImageSrc || modalImage.src} 
              alt={modalImage.alt || 'Enlarged image'} 
              className="modal-image" 
            />
            {modalImage.caption && (
              <p className="modal-caption">{modalImage.caption}</p>
            )}
            <button className="modal-close-button" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageRow;