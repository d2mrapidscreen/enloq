// src/components/Sections/CollapsibleSectionsExample.js
import React from 'react';
import CollapsibleInfoSection from '../CollapsibleInfoSection/CollapsibleInfoSection';
import TableFeatures from '../TableFeatures/TableFeatures';
import leafLogo from '../../../assets/images/icon_loader_leaf_green.png';

// Example of a custom component for a collapsible section
const SpecificationsTable = () => {
  const specs = [
    { name: "Motor power", value: "24 kW" },
    { name: "Battery capacity", value: "72 kWh" },
    { name: "Operating time", value: "Up to 8 hours" },
    { name: "Charging time", value: "3-6 hours" }
  ];
  
  return (
    <table className="specs-table">
      <tbody>
        {specs.map((spec, index) => (
          <tr key={index}>
            <td>{spec.name}</td>
            <td>{spec.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function ElectricLoaderCollapsibleSection() {
  // Main content for the section
  const mainContent = `
    The <span class="highlight-text">Enloq Loaders® E.V.</span> series are high capacity articulated wheel loaders that 
    are 100% electric. Explore the features and specifications below.
  `;
  
  // Define collapsible sections
  const collapsibleSections = [
    {
      title: "Standard Features",
      content: <TableFeatures /> // Using the TableFeatures component
    },
    {
      title: "Technical Specifications",
      content: <SpecificationsTable /> // Using a custom component
    },
    {
      title: "Operating Benefits",
      content: `
        <p>Our electric loaders provide multiple operational benefits:</p>
        <ul>
          <li>Zero emissions for environmentally friendly operation</li>
          <li>Lower maintenance costs compared to diesel alternatives</li>
          <li>Reduced noise levels for operator comfort and urban environments</li>
          <li>Lower operational costs with cheaper electricity vs. diesel fuel</li>
          <li>Improved torque characteristics for better performance</li>
        </ul>
      `
    },
    {
      title: "Warranty Information",
      content: `
        <p>Enloq Loaders® come with comprehensive warranty coverage:</p>
        <ul>
          <li>2-year/2000 hours full machine warranty</li>
          <li>3-year/3000 hours warranty on battery system</li>
          <li>Extended warranty options available</li>
          <li>Service packages for ongoing maintenance</li>
        </ul>
      `
    }
  ];

  return (
    <CollapsibleInfoSection
      backgroundColor="#f5f5f5"
      logo={leafLogo}
      titlePrefix="Electric"
      titleColorPrefix="#000"
      titleSuffix="Loaders"
      titleColorSuffix="#2fb457"
      content={mainContent}
      collapsibleSections={collapsibleSections}
      highlightTerms={["Enloq Loaders®"]}
      highlightColor="#2fb457"
      logoAlt="Enloq Loader Icon"
    />
  );
}

export default ElectricLoaderCollapsibleSection;