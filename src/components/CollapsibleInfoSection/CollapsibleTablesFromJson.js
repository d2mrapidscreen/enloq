// src/components/CollapsibleInfoSection/CollapsibleTablesFromJson.js
import React from 'react';
import CollapsibleInfoSection from './CollapsibleInfoSection';
import TableFeatures from '../TableFeatures/TableFeatures';
import TableTechnical from '../TableTechnical/TableTechnical';
import TableEmissions from '../TableEmissions/TableEmissions';
import enloqLogo from '../../assets/images/enloq_loaders_corp_logo.png';

// This could be stored in a separate JSON file
const tablesData = {
  mainContent: "<p>Enloq Loaders® provide exceptional performance with zero emissions. Explore our detailed specifications and features below.</p>",
  sections: [
    {
      id: "features",
      title: "Standard Features",
      description: "Standard features included with all Enloq Loader models"
    },
    {
      id: "technical",
      title: "Technical Specifications",
      description: "Detailed technical specifications for the EL400 and EL800 models"
    },
    {
      id: "emissions",
      title: "Emissions & Cost Comparison",
      description: "Compare fuel costs and emissions between electric and diesel models"
    }
  ]
};

function CollapsibleTablesFromJson() {
  // Map the table components based on section ID
  const getTableComponent = (id) => {
    switch(id) {
      case 'features':
        return <TableFeatures />;
      case 'technical':
        return <TableTechnical />;
      case 'emissions':
        return <TableEmissions />;
      default:
        return <div>Table not found</div>;
    }
  };
  
  // Transform JSON data for the collapsible sections
  const collapsibleSections = tablesData.sections.map(section => ({
    title: section.title,
    content: (
      <div>
        {section.description && <p className="section-description">{section.description}</p>}
        {getTableComponent(section.id)}
      </div>
    )
  }));

  return (
    <CollapsibleInfoSection
      backgroundColor="#f5f5f5"
      logo={enloqLogo}
      titlePrefix="Technical"
      titleColorPrefix="#000"
      titleSuffix="Specifications"
      titleColorSuffix="#2fb457"
      content={tablesData.mainContent}
      collapsibleSections={collapsibleSections}
      highlightTerms={["Enloq Loaders®"]}
      highlightColor="#2fb457"
      logoAlt="Enloq Loaders Logo"
    />
  );
}

export default CollapsibleTablesFromJson;