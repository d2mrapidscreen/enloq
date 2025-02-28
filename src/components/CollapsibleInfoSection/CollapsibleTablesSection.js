// src/components/CollapsibleInfoSection/CollapsibleTablesSection.js
import React from 'react';
import CollapsibleInfoSection from './CollapsibleInfoSection';
import TableFeatures from '../TableFeatures/TableFeatures';
import TableTechnical from '../TableTechnical/TableTechnical';
import TableEmissions from '../TableEmissions/TableEmissions';
import TableDimensions from '../TableDimensions/TableDimensions';
import enloqLogo from '../../assets/images/enloq_loaders_corp_logo.png';

function CollapsibleTablesSection() {
  // Main content for the section
  const mainContent = `
    <p>Enloq Loaders® provide exceptional performance with zero emissions. 
    Explore our detailed specifications and features below.</p>
  `;
  
  // Define collapsible sections for each table
  const collapsibleSections = [
    {
      title: "Standard Features",
      content: <TableFeatures />
    },
    {
      title: "Technical Specifications",
      content: <TableTechnical />
    },
    {
      title: "Emissions & Cost Comparison",
      content: <TableEmissions />
    },
    {
      title: "Dimensions & Technical Drawing",
      content: <TableDimensions />
    }
  ];

  return (
    <CollapsibleInfoSection
      backgroundColor="#f5f5f5"
/*       logo={enloqLogo}
 */      titlePrefix="Technical"
      titleColorPrefix="#000"
      titleSuffix="Specifications"
      titleColorSuffix="#2fb457"
      content={mainContent}
      collapsibleSections={collapsibleSections}
      highlightTerms={["Enloq Loaders®"]}
      highlightColor="#2fb457"
      logoAlt="Enloq Loaders Logo"
    />
  );
}

export default CollapsibleTablesSection;