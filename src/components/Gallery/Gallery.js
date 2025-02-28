import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Import data directly in the component
// This ensures the data is always available
import bucket from '../../assets/images/gallery/4-in-1-Bucket.png';
import auger from '../../assets/images/gallery/Auger.png';
import dozerBlade from '../../assets/images/gallery/Dozer_Blade.png';
import grappleBucket from '../../assets/images/gallery/Grapple_Bucket.png';
import grassCutter from '../../assets/images/gallery/Grass_Cutter.png';
import grassFork from '../../assets/images/gallery/Grass_Fork.png';
import miniDigger from '../../assets/images/gallery/Mini_Digger.png';
import palletFork from '../../assets/images/gallery/Pallet_Fork.png';
import baleGrabber from '../../assets/images/gallery/Round_Bale_Grabber.png';
import screeningBucket from '../../assets/images/gallery/Screening_Bucket.png';
import snowPlow from '../../assets/images/gallery/Snow_Plow_Articulated_Dozer_Blade.png';
import sweeper from '../../assets/images/gallery/Sweeper.png';

const Gallery = ({ 
  imagesPerRow = 4,
  backgroundColor = '#e6e6e6'
}) => {
  // Hardcoded data - more reliable for initial implementation
  const title = "LOADS OF";
  const titleHighlight = "ATTACHMENTS";
  const content = "Our attachments are developed entirely in-house so that they deliver the best results when working with our machines. Enloq Loaders® offers different attachments so your machine can be used all year round and a variety of jobs. By choosing the right attachment it is possible to adjust your EL800s to working conditions for agriculture, construction, material handling, private use and many other areas of application. Get every job done with just one machine!";
  
  // Updated images array with new file names and matching descriptions
  const images = [
    { id: 1, src: bucket, alt: "4-in-1 Bucket" },
    { id: 2, src: auger, alt: "Auger" },
    { id: 3, src: dozerBlade, alt: "Dozer Blade" },
    { id: 4, src: grappleBucket, alt: "Grapple Bucket" },
    { id: 5, src: grassCutter, alt: "Grass Cutter" },
    { id: 6, src: grassFork, alt: "Grass Fork" },
    { id: 7, src: miniDigger, alt: "Mini Digger" },
    { id: 8, src: palletFork, alt: "Pallet Fork" },
    { id: 9, src: baleGrabber, alt: "Round Bale Grabber" },
    { id: 10, src: screeningBucket, alt: "Screening Bucket" },
    { id: 11, src: snowPlow, alt: "Snow Plow Articulated Dozer Blade" },
    { id: 12, src: sweeper, alt: "Sweeper" }
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
  // State to track if we should show tooltips based on screen size
  const [showTooltips, setShowTooltips] = useState(true);

  // Check screen size on mount and when window is resized
  useEffect(() => {
    const checkScreenSize = () => {
      setShowTooltips(window.innerWidth > 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Show tooltip on hover - only if we're on a larger screen
  const showTooltip = (id) => {
    if (showTooltips) {
      setActiveTooltip(id);
    }
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