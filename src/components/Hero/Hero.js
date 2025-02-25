// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import groupPhoto from '../../assets/images/SRDC_Enloq_Group_photo.png';
import enloqTagline from '../../assets/images/enloq-tagline.png';

// Import example icons (replace with your actual icons)
import icon1 from '../../assets/images/icon_small_body.png';
import icon2 from '../../assets/images/icon_zero_emissions.png';
import icon3 from '../../assets/images/icon_flexible_mobility.png';

const Hero = ({ icons = [], iconsPosition = 'right' }) => {
  // Default icons if none provided
  const defaultIcons = [
    { src: icon1, alt: "Small Body" },
    { src: icon2, alt: "Zero Emissions" },
    { src: icon3, alt: "Flexible Mobility" }
  ];

  // Use provided icons or defaults
  const displayIcons = icons.length > 0 ? icons : defaultIcons;
  
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={groupPhoto} 
          alt="Enloq Electric Vehicles" 
          className="hero-image"
        />
      </div>
      
      {/* Icons container */}
      <div className={`hero-icons-container ${iconsPosition}`}>
        {displayIcons.map((icon, index) => (
          <div key={index} className="hero-icon">
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
      
      <div className="hero-tagline-container">
        <img 
          src={enloqTagline} 
          alt="100% ELECTRIC + 100% WORK" 
          className="hero-tagline-image"
        />
      </div>
    </section>
  );
};

export default Hero;