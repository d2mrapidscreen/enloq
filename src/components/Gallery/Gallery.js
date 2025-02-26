import React, { useState } from 'react';
import './Gallery.css';

// Import data directly in the component
// This ensures the data is always available
import attachment1 from '../../assets/images/gallery/attachment_1.png';
import attachment2 from '../../assets/images/gallery/attachment_2.png';
import attachment3 from '../../assets/images/gallery/attachment_3.png';
import attachment4 from '../../assets/images/gallery/attachment_4.png';
import attachment5 from '../../assets/images/gallery/attachment_5.png';
import attachment6 from '../../assets/images/gallery/attachment_6.png';
import attachment7 from '../../assets/images/gallery/attachment_7.png';
import attachment8 from '../../assets/images/gallery/attachment_8.png';
import attachment9 from '../../assets/images/gallery/attachment_9.png';
import attachment10 from '../../assets/images/gallery/attachment_10.png';
import attachment11 from '../../assets/images/gallery/attachment_11.png';
import attachment12 from '../../assets/images/gallery/attachment_12.png';

const Gallery = ({ 
  imagesPerRow = 4,
  backgroundColor = '#e6e6e6'
}) => {
  // Hardcoded data - more reliable for initial implementation
  const title = "LOADS OF";
  const titleHighlight = "ATTACHMENTS";
  const content = "Our attachments are developed entirely in-house so that they deliver the best results when working with our machines. Enloq Loaders® offers different attachments so your machine can be used all year round and a variety of jobs. By choosing the right attachment it is possible to adjust your EL800s to working conditions for agriculture, construction, material handling, private use and many other areas of application. Get every job done with just one machine!";
  
  const images = [
    { id: 1, src: attachment1, alt: "Bucket attachment" },
    { id: 2, src: attachment2, alt: "Grabber attachment" },
    { id: 3, src: attachment3, alt: "Fork attachment" },
    { id: 4, src: attachment4, alt: "Pallet fork attachment" },
    { id: 5, src: attachment5, alt: "Multipurpose attachment" },
    { id: 6, src: attachment6, alt: "Bale spike attachment" },
    { id: 7, src: attachment7, alt: "Grapple attachment" },
    { id: 8, src: attachment8, alt: "Pallet lifter attachment" },
    { id: 9, src: attachment9, alt: "Sieve bucket attachment" },
    { id: 10, src: attachment10, alt: "Auger attachment" },
    { id: 11, src: attachment11, alt: "Sweeper attachment" },
    { id: 12, src: attachment12, alt: "Broom attachment" }
  ];

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

  return (
    <section className="gallery-section" style={{ backgroundColor }}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">
            <span className="gallery-title-dark">{title} </span>
            <span className="gallery-title-green">{titleHighlight}</span>
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

export default Gallery;