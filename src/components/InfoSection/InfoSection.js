// src/components/InfoSection/InfoSection.js
import React from 'react';
import './InfoSection.css';

function InfoSection({ 
  backgroundColor = '#d1d3d4',
  logo,
  titlePrefix = 'Think',
  titlePrefix2 = '', // optional second prefix
  titleColorPrefix = '#000',
  titleSuffix = 'Electric',
  titleColorSuffix = '#2fb457',
  content,
  highlightColor = '#2fb457',
  highlightTerms = [],
  logoAlt = "Logo"
}) {
  
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

  // Set the highlight color as a CSS variable for the section
  const sectionStyle = {
    backgroundColor,
    '--highlight-color': highlightColor
  };

  return (
    <section className="info-section" style={sectionStyle}>
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
      </div>
    </section>
  );
}

export default InfoSection;