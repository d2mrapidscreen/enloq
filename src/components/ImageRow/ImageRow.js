import React, { useState } from 'react';
import './ImageRow.css';

const ImageRow = ({ 
  images = [], 
  imagesPerRow = 3,
  headerImage = null, // Image to display at the top before intro sections
  introSections = [], // Array of intro sections, each with title and content (now supports highlights)
  singleImage = null, // New: Single image to display
  youtubeVideo = null, // New: YouTube video to embed
  customComponent = null, // New: Custom React component to render
  titlePrimaryColor = null, // Override for primary title color
  titleHighlightColor = null // Override for highlight title color
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

  // Helper to render a YouTube embed with proper aspect ratio
  const renderYoutubeEmbed = (videoData) => {
    if (!videoData || !videoData.videoId) return null;
    
    const { videoId, title = 'YouTube video', aspectRatio = '16:9' } = videoData;
    
    // Calculate padding based on aspect ratio (default 16:9)
    let paddingBottom = '56.25%'; // Default for 16:9
    if (aspectRatio === '4:3') paddingBottom = '75%';
    if (aspectRatio === '1:1') paddingBottom = '100%';
    
    return (
      <div className="youtube-container" style={{ width: '100%', maxWidth: videoData.maxWidth || '800px', margin: '0 auto' }}>
        <div style={{ position: 'relative', paddingBottom, height: 0, overflow: 'hidden' }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {videoData.caption && (
          <p className="video-caption" style={{ textAlign: 'center', marginTop: '10px' }}>{videoData.caption}</p>
        )}
      </div>
    );
  };

  // Helper to render single image with optional caption
  const renderSingleImage = (imageData) => {
    if (!imageData || !imageData.src) return null;
    
    return (
      <div className="single-image-container" style={{ width: '100%', maxWidth: imageData.maxWidth || '800px', margin: '0 auto' }}>
        <img 
          src={imageData.src} 
          alt={imageData.alt || 'Featured image'} 
          className="single-image"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        {imageData.caption && (
          <p className="single-image-caption" style={{ textAlign: 'center', marginTop: '10px' }}>{imageData.caption}</p>
        )}
      </div>
    );
  };

  // Helper to render custom component
  const renderCustomComponent = (componentData) => {
    if (!componentData || !componentData.component) return null;
    
    const { component: Component, props = {}, wrapperClassName = '', title } = componentData;
    
    return (
      <div className={`custom-component-container ${wrapperClassName}`} style={{ width: '100%', maxWidth: componentData.maxWidth || '800px', margin: '0 auto' }}>
        {title && (
          <h3 className="component-title" style={{ marginBottom: '15px', color: '#4CAF50' }}>{title}</h3>
        )}
        <Component {...props} />
      </div>
    );
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
              {(section.title || section.titlePart1 || section.titlePart2) && (
                <h2 className="intro-title">
                  {section.title && section.title}
                  {(section.titlePart1 || section.titlePart2) && (
                    <>
                      <span 
                        className="title-primary"
                        style={titlePrimaryColor || section.primaryColor ? { color: titlePrimaryColor || section.primaryColor } : {}}
                      >
                        {section.titlePart1} 
                      </span>
                      <span 
                        className="title-highlight"
                        style={titleHighlightColor || section.highlightColor ? { color: titleHighlightColor || section.highlightColor } : {}}
                      >
                        {section.titlePart2}
                      </span>
                    </>
                  )}
                </h2>
              )}
              {section.content && (
                <p className="intro-content">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* NEW: Render single image if provided */}
      {singleImage && (
        <div className="content-section">
          {renderSingleImage(singleImage)}
        </div>
      )}

      {/* NEW: Render YouTube video if provided */}
      {youtubeVideo && (
        <div className="content-section">
          {renderYoutubeEmbed(youtubeVideo)}
        </div>
      )}

      {/* NEW: Render custom component if provided */}
      {customComponent && (
        <div className="content-section">
          {renderCustomComponent(customComponent)}
        </div>
      )}

      {/* Render image grid (original functionality) */}
      {images.length > 0 && rows.map((rowImages, rowIndex) => (
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