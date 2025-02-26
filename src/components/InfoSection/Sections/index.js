// Example 1: "Think Electric" section
import React from 'react';
import InfoSection from '../InfoSection';
import leafLogo from '../../../assets/images/icon_loader_leaf_green.png';

function ThinkElectricSection() {
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
  const enloqLogo = '/path/to/enloq-logo.png'; // Replace with actual path
  
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
      backgroundColor="#f5f5f5"
      logo={enloqLogo}
      titlePrefix="enloq"
      titleColorPrefix="#000"
      titleSuffix="."
      titleColorSuffix="#2fb457"
      content={<div dangerouslySetInnerHTML={{ __html: enloqContent }} />}
      highlightTerms={["Enloq Loaders®"]}
      logoAlt="Enloq Logo"
    />
  );
}

export { ThinkElectricSection, EnloqLoadersSection };