// src/components/CollapsibleInfoSection/CollapsibleExamples.js
import React from 'react';
import CollapsibleInfoSection from './CollapsibleInfoSection';
import enloqLogo from '../../assets/images/enloq_loaders_corp_logo.png';

function CollapsibleExamples() {
  // Text content example
  const textContent = `
    <p>This is an example of a collapsible section with mixed content types.</p>
    <p>Click on each section to expand or collapse it.</p>
  `;
  
  // HTML content for a section
  const htmlContent = `
    <div class="custom-content">
      <h4>HTML Content Example</h4>
      <p>This content is provided as HTML and formatted accordingly.</p>
      <ul>
        <li>Item 1 with <span class="highlight-text">highlighted text</span></li>
        <li>Item 2 with <strong>bold text</strong></li>
        <li>Item 3 with <em>italic text</em></li>
      </ul>
    </div>
  `;
  
  // Custom component for a section
  const CustomComponent = () => (
    <div className="custom-component">
      <h4>React Component Example</h4>
      <p>This content is provided as a React component.</p>
      <div className="grid-container">
        {[1, 2, 3, 4].map(item => (
          <div key={item} className="grid-item">
            <strong>Item {item}</strong>
            <p>Description for item {item}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  // Mixed content for a section
  const MixedContent = () => (
    <div>
      <h4>Mixed Content Example</h4>
      <p>This section contains both text and a table.</p>
      
      <table className="simple-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Power</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>EL400</td>
            <td>15kW</td>
            <td>400kg</td>
          </tr>
          <tr>
            <td>EL800</td>
            <td>24kW</td>
            <td>800kg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  // Define collapsible sections with different content types
  const collapsibleSections = [
    {
      title: "HTML Content Section",
      content: htmlContent
    },
    {
      title: "React Component Section",
      content: <CustomComponent />
    },
    {
      title: "Mixed Content Section",
      content: <MixedContent />
    }
  ];

  return (
    <CollapsibleInfoSection
      backgroundColor="#f5f5f5"
      logo={enloqLogo}
      titlePrefix="Content"
      titleColorPrefix="#000"
      titleSuffix="Examples"
      titleColorSuffix="#2fb457"
      content={textContent}
      collapsibleSections={collapsibleSections}
      highlightTerms={["highlighted text"]}
      highlightColor="#2fb457"
      logoAlt="Company Logo"
    />
  );
}

export default CollapsibleExamples;