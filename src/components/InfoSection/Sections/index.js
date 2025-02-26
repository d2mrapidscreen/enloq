// src/components/Sections/index.js
import React from 'react';
import InfoSection from '../InfoSection';
import leafLogo from '../../../assets/images/icon_loader_leaf_green.png';
import enloqLogo from '../../../assets/images/enloq_loaders_corp_logo.png';

function ThinkElectricSection() {
  // HTML content with pre-formatted highlight spans
  const thinkContent = `
    The <span class="highlight-text">Enloq Loaders® E.V.</span> series are high capacity articulated wheel loaders, material dumpers 
    and all-terrain fork lifts in different size configurations that are 100% electric. Our entire range 
    is designed for zero emission, low noise operation without compromising speed, power 
    or operational length. Powered by BYD® Lithium Blade Battery technology our range of 
    equipment is available in Australia by Enloq Loaders®, Australia.
  `;

  return (
    <InfoSection
      backgroundColor="#d1d3d4"
      logo={leafLogo}
      titlePrefix="Think"
      titleColorPrefix="#000"
      titleSuffix="Electric"
      titleColorSuffix="#2fb457"
      content={thinkContent}
      logoAlt="Enloq Loader Icon"
    />
  );
}

// Example 2: "Enloq Loaders" section
function EnloqLoadersSection() {
  
  // HTML content with multiple paragraphs
  const enloqContent = `
    <p>Enloq Loaders® focuses on the development and implementation of electric equipment for 
    industrial applications in support of a greener efficient work practices.</p>
    
    <p>Our goal is to design and produce specialty industrial EV equipment, with a focus on safety, 
    design, and reliability of the highest quality using the most advanced battery technology while 
    always maintaining an unparalleled value proposition.</p>
    
    <p>Take a closer look at <span class="highlight-text">Enloq Loaders®</span> to see how technology can drive profits by eliminating 
    emissions, lower maintenance cost and reduce hourly running expenses. It's a greener process 
    requiring minimal energy and delivers massive carbon offsets.</p>
    
    <p>Contact any of our friendly staff to find out more or schedule a demonstration.</p>
  `;

  return (
    <InfoSection
      backgroundColor="#d1d3d4"
      logo={enloqLogo}
      titlePrefix=""
      titleColorPrefix="#000"
      titleSuffix=""
      titleColorSuffix="#2fb457"
      content={enloqContent}
      highlightColor="#2fb457"
      logoAlt="Enloq Logo"
    />
  );
}

// Example 3: Auto-highlighting without manual HTML
function EnloqFeatureSection() {
  // Plain text content, let the component handle the highlighting
  const featureContent = `
    Enloq Loaders® provides innovative electric solutions for industrial applications.
    Our equipment is designed with sustainability and performance in mind.
    Contact us today to learn more about how Enloq Loaders® can transform your operations.
  `;

  return (
    <InfoSection
      backgroundColor="#f9f9f9"
      titlePrefix="Feature"
      titleColorPrefix="#000"
      titleSuffix="Highlights"
      titleColorSuffix="#2fb457"
      content={featureContent}
      highlightTerms={["Enloq Loaders®"]}
      highlightColor="#2fb457"
    />
  );
}

export { ThinkElectricSection, EnloqLoadersSection, EnloqFeatureSection };