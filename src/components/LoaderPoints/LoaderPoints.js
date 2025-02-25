import React from 'react';
import './LoaderPoints.css';
import loaderPointsData from './loaderPointsData';

const LoaderPoints = () => {
  // Function to chunk the data into pairs for each row
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Create rows with 2 points per row
  const rows = chunkArray(loaderPointsData, 2);

  return (
    <section className="loader-points-section">
      <div className="loader-points-wrapper">
        <div className="loader-points">
          {rows.map((row, rowIndex) => (
            <div className="loader-points-row" key={`row-${rowIndex}`}>
              {row.map((point) => (
                <div className="loader-point" key={`point-${point.id}`}>
                  <div className="point-number">{point.id}</div>
                  <div className="point-content">
                    <h3>{point.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: point.description.replace(/Enloq Loaders®|BYD®Blade Battery Technology/g, '<strong>$&</strong>') }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="loader-points-button-container">
          <button className="find-out-more-btn">FIND OUT MORE</button>
        </div>
      </div>
    </section>
  );
};

export default LoaderPoints;