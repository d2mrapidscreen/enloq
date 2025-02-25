// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import groupPhoto from '../../assets/images/SRDC_Enloq_Group_photo_09.24.png';
import enloqTagline from '../../assets/images/enloq-tagline.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={groupPhoto} 
          alt="Enloq Group" 
          className="hero-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-logo-container">
          <img 
            src={enloqTagline} 
            alt="Enloq Tagline" 
            className="hero-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;