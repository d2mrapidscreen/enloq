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
        <table className="features-table">
          <thead>
            <tr>
              <th className="header-title">STANDARD MACHINE FEATURES</th>
              <th className="logo-header" colSpan="2">
                <div className="logo-container">
                  <div className="el400-logo">
                    <img src={el400Logo} alt="EL400" />
                  </div>
                  <div className="el800-logo">
                    <img src={el800Logo} alt="EL800" />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="feature-row">
                <td className="feature-name">{feature.name}</td>
                <td className="feature-availability el400-cell">{feature.el400}</td>
                <td className="feature-availability el800-cell">{feature.el800}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableFeatures;