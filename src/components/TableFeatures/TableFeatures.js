import React from 'react';
import './TableFeatures.css';

// Import model logos if needed
import el400Logo from '../../assets/images/Table_400S_wombat_logo.png';
import el800Logo from '../../assets/images/Table_800s_logo.png';

const TableFeatures = () => {
  const features = [
    {
      name: "Euro style standard quick-change system (hydraulic lock)",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Double acting hydraulic function on lift arm",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "ROPS/FOPS safety roof incl. safety doors left and right",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Hydraulic service brake on 4 wheels",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Luxury suspension seat with seat belt, lumbar support and back support",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Reversing chime",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Towing hook/ball at the back",
      el400: "Std",
      el800: "Std"
    },
    {
      name: "Working light (LED) front and rear, safety beacon",
      el400: "Std",
      el800: "Std"
    }
  ];

  return (
    <section className="table-features-section">
      <div className="container">
        <div className="table-header">
          <h2>STANDARD MACHINE FEATURES</h2>
          <div className="model-logos">
            <div className="model-logo">
              <img src={el400Logo} alt="EL400" />
            </div>
            <div className="model-logo">
              <img src={el800Logo} alt="EL800" />
            </div>
          </div>
        </div>
        
        <div className="features-table">
          {features.map((feature, index) => (
            <div key={index} className="feature-row">
              <div className="feature-name">{feature.name}</div>
              <div className="feature-availability el400">{feature.el400}</div>
              <div className="feature-availability el800">{feature.el800}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableFeatures;