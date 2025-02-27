import React, { useState, useEffect } from 'react';
import './LoaderPoints.css';
import loaderPointsData from './loaderPointsData';

const LoaderPoints = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Update isMobile state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to chunk the data into pairs for each row on desktop
  // On mobile, we'll use a different approach
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Create rows with 2 points per row
  const rows = chunkArray(loaderPointsData, 2);

  // Helper function to safely format text with strong tags
  const formatDescription = (description) => {
    return {
      __html: description.replace(
        /Enloq Loaders®|BYD®Blade Battery Technology/g, 
        '<strong>$&</strong>'
      )
    };
  };

  return (
    <section className="loader-points-section">
      <div className="loader-points-wrapper">
        <div className="loader-points">
          {isMobile ? (
            // On mobile, render points in a single column for better layout
            loaderPointsData.map((point) => (
              <div className="loader-point" key={`point-${point.id}`}>
                <div className="point-number">{point.id}</div>
                <div className="point-content">
                  <h3>{point.title}</h3>
                  <p dangerouslySetInnerHTML={formatDescription(point.description)} />
                </div>
              </div>
            ))
          ) : (
            // On desktop, maintain the row-based layout
            rows.map((row, rowIndex) => (
              <div className="loader-points-row" key={`row-${rowIndex}`}>
                {row.map((point) => (
                  <div className="loader-point" key={`point-${point.id}`}>
                    <div className="point-number">{point.id}</div>
                    <div className="point-content">
                      <h3>{point.title}</h3>
                      <p dangerouslySetInnerHTML={formatDescription(point.description)} />
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
        <div className="loader-points-button-container">
          <button className="find-out-more-btn">FIND OUT MORE</button>
        </div>
      </div>
    </section>
  );
};

export default LoaderPoints;