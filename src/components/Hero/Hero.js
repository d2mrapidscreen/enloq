// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import groupPhoto from '../../assets/images/SRDC_Enloq_Group_photo.png';
import enloqTagline from '../../assets/images/enloq-tagline.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={groupPhoto} 
          alt="Enloq Electric Vehicles" 
          className="hero-image"
        />
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