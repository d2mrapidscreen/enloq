import React from 'react';
import './TableTechnical.css';

// Import model logos if needed
import el400Logo from '../../assets/images/Table_400S_wombat_logo.png';
import el800Logo from '../../assets/images/Table_800s_logo.png';

const TableTechnical = () => {
  const specifications = [
    {
      name: "Rated load (kg)",
      el400: "45 0",
      el800: "860 |1050"
    },
    {
      name: "Overall weight (kg)",
      el400: "1120",
      el800: "2050 |2120"
    },
    {
      name: "Bucket capacity (m³)",
      el400: "0.2",
      el800: "0.25"
    },
    {
      name: "Max.steering angle",
      el400: "±35°",
      el800: "±45°"
    },
    {
      name: "Min. steering radius (mm)",
      el400: "2520",
      el800: "2050"
    },
    {
      name: "Rear departure",
      el400: "7°",
      el800: "19°"
    },
    {
      name: "Total time (s)",
      el400: "7.5",
      el800: "8"
    },
    {
      name: "Working time (h)",
      el400: "6",
      el800: "6"
    },
    {
      name: "Working speed (km/h)",
      el400: "low speed 10/high speed 18",
      el800: "low speed 10/high speed 20"
    },
    {
      name: "Dumping height (mm)",
      el400: "1400",
      el800: "2170"
    },
    {
      name: "Lifting height (mm)",
      el400: "2160",
      el800: "3330"
    },
    {
      name: "Overall dimension (mm)",
      el400: "3260x1140x2085",
      el800: "3810x1260x2270"
    },
    {
      name: "Dumping distance (mm)",
      el400: "600",
      el800: "405"
    },
    {
      name: "Bucket width (mm)",
      el400: "1040",
      el800: "1130"
    },
    {
      name: "Wheel base (mm)",
      el400: "1330",
      el800: "1380"
    },
    {
      name: "Wheel thread (mm)",
      el400: "840",
      el800: "945"
    },
    {
      name: "Min. ground clearance (mm)",
      el400: "200",
      el800: "200"
    },
    {
      name: "Battery model",
      el400: "6-EVF-150",
      el800: "3-EVF-200 |Lithium"
    },
    {
      name: "Battery type",
      el400: "AGM |Lithium",
      el800: ""
    },
    {
      name: "Battery quantity",
      el400: "5",
      el800: "12"
    },
    {
      name: "Battery capacity (KW)",
      el400: "9",
      el800: "14.4 |17.2"
    },
    {
      name: "Rated voltage (V)",
      el400: "60",
      el800: "72"
    },
    {
      name: "Charging time (h)",
      el400: "8",
      el800: "8 |5"
    },
    {
      name: "Working system voltage (V)",
      el400: "60",
      el800: "72"
    },
    {
      name: "Working system power (KW)",
      el400: "2.5x2",
      el800: "4x2"
    },
    {
      name: "Motor quantity",
      el400: "2",
      el800: "2"
    },
    {
      name: "Tyre model",
      el400: "6.00-12",
      el800: "26×12.00-12"
    },
    {
      name: "Working brake",
      el400: "Drum oil brake",
      el800: ""
    },
    {
      name: "Parking brake",
      el400: "Drum handbrake",
      el800: ""
    }
  ];

  return (
    <section className="table-technical-section">
      <div className="container">
        <div className="table-header">
          <h2>TECHNICAL DATA</h2>
          <div className="model-logos">
            <div className="model-logo">
              <img src={el400Logo} alt="EL400" />
            </div>
            <div className="model-logos-divider"></div>
            <div className="model-logo">
              <img src={el800Logo} alt="EL800" />
            </div>
          </div>
        </div>
        
        <div className="technical-table">
          {specifications.map((spec, index) => (
            <div key={index} className="technical-row">
              <div className="specification-name">{spec.name}</div>
              <div className="specification-value el400">{spec.el400}</div>
              <div className="specification-value el800">{spec.el800 || "Drum oil brake"}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableTechnical;