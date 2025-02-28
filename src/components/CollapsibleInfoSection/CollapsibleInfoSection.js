// src/components/CollapsibleInfoSection/CollapsibleInfoSection.js
import React, { useState, useEffect } from 'react';
import './CollapsibleInfoSection.css';

function CollapsibleInfoSection({ 
  backgroundColor = '#d1d3d4',
  logo,
  titlePrefix = 'Think',
  titlePrefix2 = '', // optional second prefix
  titleColorPrefix = '#000',
  titleSuffix = 'Electric',
  titleColorSuffix = '#2fb457',
  content,
  collapsibleSections = [], // Array of collapsible content sections
  highlightColor = '#2fb457',
  highlightTerms = [],
  logoAlt = "Logo"
}) {
  // Add state to track window width for responsive adjustments
  const [isMobile, setIsMobile] = useState(false);
  
  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState([]);
  
  // Effect to check window size and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initialize expandedSections if collapsibleSections changes
  useEffect(() => {
    setExpandedSections(new Array(collapsibleSections.length).fill(false));
  }, [collapsibleSections]);
  
  // Function to apply highlighting to specific terms in content
  const formatContent = (text) => {
    if (!text) return null;
    
    // Apply highlight terms if provided
    if (highlightTerms.length) {
      let formattedText = text;
      highlightTerms.forEach(term => {
        const regex = new RegExp(`(${term})`, 'g');
        formattedText = formattedText.replace(regex, '<span class="highlight-text">$1</span>');
      });
      
      return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
    }
    
    // If content already has HTML, render it directly
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  };

  // Toggle a single section's expanded state
  const toggleSection = (index) => {
    const newExpandedSections = [...expandedSections];
    newExpandedSections[index] = !newExpandedSections[index];
    setExpandedSections(newExpandedSections);
  };
  
  // Expand all sections
  const expandAll = () => {
    setExpandedSections(new Array(collapsibleSections.length).fill(true));
  };
  
  // Collapse all sections
  const collapseAll = () => {
    setExpandedSections(new Array(collapsibleSections.length).fill(false));
  };

  // Set the highlight color as a CSS variable for the section
  const sectionStyle = {
    backgroundColor,
    '--highlight-color': highlightColor
  };

  return (
    <section className="collapsible-info-section" style={sectionStyle}>
      <div className="info-container">
        <div className="info-header">
          {logo && (
            <div className="info-logo">
              <img src={logo} alt={logoAlt} />
            </div>
          )}
          <div className="info-text">
            {titlePrefix && (
              <span className="info-title-prefix" style={{ color: titleColorPrefix }}>
                {titlePrefix}
              </span>
            )}
            {titlePrefix2 && (
              <span className="info-title-prefix" style={{ color: titleColorPrefix }}>
                {titlePrefix2}
              </span>
            )}
            {titleSuffix && (
              <span className="info-title-suffix" style={{ color: titleColorSuffix }}>
                {titleSuffix}
              </span>
            )}
          </div>
        </div>
        
        <div className="info-content">
          {typeof content === 'string' ? formatContent(content) : content}
        </div>
        
        {collapsibleSections.length > 0 && (
          <div className="collapsible-controls">
            <div className="section-controls">
              <button 
                className="expand-all-btn" 
                onClick={expandAll}
              >
                expand all
              </button>
              <button 
                className="collapse-all-btn" 
                onClick={collapseAll}
              >
                collapse all
              </button>
            </div>
          </div>
        )}
        
        {collapsibleSections.map((section, index) => (
          <div className="collapsible-section" key={index}>
            <div 
              className="collapsible-header"
              onClick={() => toggleSection(index)}
            >
              <h3>{section.title}</h3>
              <span className={`toggle-icon ${expandedSections[index] ? 'expanded' : ''}`}>+</span>
            </div>
            
            <div className={`collapsible-content ${expandedSections[index] ? 'expanded' : ''}`}>
              {typeof section.content === 'string' 
                ? formatContent(section.content) 
                : section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CollapsibleInfoSection;