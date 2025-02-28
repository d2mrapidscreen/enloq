import React from 'react';
import './TableEmissions.css';

// Import model logos if needed
import el400Logo from '../../assets/images/Table_400S_wombat_logo.png';
import el800Logo from '../../assets/images/Table_800s_logo.png';
import dieselLoaderIcon from '../../assets/images/Table_loader_with_fart_icon.png';

const TableEmissions = () => {
  const comparisons = [
    {
      name: "Consumption",
      el400: "9.0 kW/6H = 1.5kWh",
      el800: "14.4 kW/6H = 2.4kWh",
      diesel: "11.0 l/h (3 Gal)"
    },
    {
      name: "Average cost per unit",
      el400: "0.32c/kwh",
      el800: "0.32c/kwh",
      diesel: "$2.20/l"
    },
    {
      name: "Energy / fuel cost per 1hour of operation",
      el400: "$0.48",
      el800: "$0.76",
      diesel: "$24.20"
    },
    {
      name: "Energy / fuel cost per 6 hours of operation",
      el400: "$2.88",
      el800: "$4.56",
      diesel: "$145.20"
    },
    {
      name: "Annual energy/fuel costs at the average of 750 operating hours",
      el400: "$360",
      el800: "$570",
      diesel: "$18,150"
    }
  ];

  return (
    <section className="table-emissions-section">
      <div className="container">
        <div className="emissions-table">
          <div className="emissions-header">
            <div className="header-cell model-column">
              {/* Empty space for the first column */}
            </div>
            <div className="header-cell el400-column">
              <div className="logo-container">
                <img src={el400Logo} alt="EL400" className="model-logo" />
              </div>
            </div>
            <div className="header-cell el800-column">
              <div className="logo-container">
                <img src={el800Logo} alt="EL800" className="model-logo" />
              </div>
            </div>
            <div className="header-cell diesel-column">
              <div className="logo-container">
                <img src={dieselLoaderIcon} alt="Diesel Loader" className="diesel-icon" />
              </div>
            </div>
          </div>
          
          {comparisons.map((comparison, index) => (
            <div key={index} className="emissions-row">
              <div className="emissions-cell name-cell">
                {comparison.name}
              </div>
              <div className="emissions-cell el400-cell">
                {comparison.el400}
              </div>
              <div className="emissions-cell el800-cell">
                {comparison.el800}
              </div>
              <div className="emissions-cell diesel-cell">
                {comparison.diesel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableEmissions;