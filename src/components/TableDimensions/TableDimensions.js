// src/components/TableDimensions/TableDimensions.js
import React from 'react';
import './TableDimensions.css'; // Import the CSS file
import dimensionsImage from '../../assets/images/Table_dimensions.png';

const TableDimensions = () => {
  return (
    <div className="dimensions-container">
      <div className="image-container">
        <img 
          src={dimensionsImage} 
          alt="Technical Dimensions" 
        />
        <p className="image-caption">Technical dimensions for EL400 and EL800 loaders</p>
      </div>
      
{/*       <div className="dimensions-text">
        <p>Key dimensions include:</p>
        <ul>
          <li><strong>Width:</strong> Standard configuration is 1200mm (EL400) and 1600mm (EL800)</li>
          <li><strong>Height:</strong> 2100mm to top of cabin</li>
          <li><strong>Length:</strong> 3200mm with standard bucket</li>
          <li><strong>Ground Clearance:</strong> 230mm</li>
          <li><strong>Turning Radius:</strong> 1850mm (inner)</li>
        </ul>
        <p>All measurements are in millimeters unless otherwise stated.</p>
      </div> */}
    </div>
  );
};

export default TableDimensions;