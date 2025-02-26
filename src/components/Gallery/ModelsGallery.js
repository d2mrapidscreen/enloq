import React, { useState } from 'react';
// Reuse the same CSS as Gallery.css or import a new one if you have specific styling
import './Gallery.css';

// Import model images
// Update these paths to match your actual asset locations
import modelED1600 from '../../assets/images/models/enloq_model_ed1600.png';
import modelEF1200 from '../../assets/images/models/enloq_model_ef1200.png';
import modelEL1200T from '../../assets/images/models/enloq_model_el1200t.png';
import modelEL1200S from '../../assets/images/models/enloq_model_el1200s.png';
import modelEF2500 from '../../assets/images/models/enloq_model_ef2500.png';
import modelEL400S from '../../assets/images/models/enloq_model_el400s.png';
import modelEL800S from '../../assets/images/models/enloq_model_el800s.png';
import modelEL800T from '../../assets/images/models/enloq_model_el800t.png';

const ModelsGallery = ({ 
  imagesPerRow = 4,
  backgroundColor = '#e6e6e6',
  title = "THE RANGE",
  titleHighlight = "",
  content = "The full range of machines"
}) => {
  // Model data with images and descriptions
  const images = [
    { id: 1, src: modelED1600, alt: "ENLOQ ED1600" },
    { id: 2, src: modelEL400S, alt: "ENLOQ EL400S" },
    { id: 3, src: modelEL800S, alt: "ENLOQ EL800S" },
    { id: 4, src: modelEL800T, alt: "ENLOQ EL800T" },
    { id: 5, src: modelEL1200S, alt: "ENLOQ EL1200S" },
    { id: 6, src: modelEL1200T, alt: "ENLOQ EL1200T" },
    { id: 7, src: modelEF1200, alt: "ENLOQ EL1200" },
    { id: 8, src: modelEF2500, alt: "ENLOQ EL2500" },
  ];

  // Create rows of images based on imagesPerRow
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += imagesPerRow) {
      rows.push(images.slice(i, i + imagesPerRow));
    }
    return rows;
  };

  const rows = createRows();
  
  // Track which image has tooltip visible
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Show tooltip on hover
  const showTooltip = (id) => {
    setActiveTooltip(id);
  };

  // Hide tooltip when mouse leaves
  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  // Split the title if needed
  const titleParts = title.split(' ');
  const mainTitle = titleHighlight ? titleParts.slice(0, -1).join(' ') : title;
  const highlightedPart = titleHighlight || (titleParts.length > 1 ? titleParts[titleParts.length - 1] : '');

  return (
    <section className="gallery-section" style={{ backgroundColor }}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            <span className="gallery-title-dark">{mainTitle} </span>
            {highlightedPart && <span className="gallery-title-green">{highlightedPart}</span>}
          </h2>
        </div>
        
        <div className="gallery-content">
          <p className="gallery-text">{content}</p>
        </div>
        
        <div className="gallery-grid-container">
          {rows.map((rowImages, rowIndex) => (
            <div 
              key={rowIndex} 
              className="gallery-grid"
            >
              {rowImages.map((image, imageIndex) => (
                <div 
                  key={`${rowIndex}-${imageIndex}`} 
                  className="gallery-item"
                  onMouseEnter={() => showTooltip(image.id)}
                  onMouseLeave={hideTooltip}
                >
                  {activeTooltip === image.id && (
                    <div className="gallery-tooltip">
                      {image.alt}
                    </div>
                  )}
                  <div className="gallery-image-wrapper">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="gallery-image" 
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGallery;