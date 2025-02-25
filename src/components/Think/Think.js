// src/components/Think/Think.js
import React from 'react';
import './Think.css';
import logoImage from '../../assets/images/loader-icon.png'; // You would need to add this image

function Think() {
  return (
    <section className="think-section">
      <div className="think-container">
        <div className="think-header">
          <div className="think-logo">
            <img src={logoImage} alt="Enloq Loader Icon" />
          </div>
          <div className="think-text">
            <span className="think-black">Think</span>
            <span className="think-green">Electric</span>
          </div>
        </div>
        <div className="think-content">
          <p>
            The <span className="green-text">Enloq Loaders® E.V.</span> series are high capacity articulated wheel loaders, material dumpers 
            and all-terrain fork lifts in different size configurations that are 100% electric. Our entire range 
            is designed for zero emission, low noise operation without compromising speed, power 
            or operational length. Powered by BYD® Lithium Blade Battery technology our range of 
            equipment is available in Australia by Enloq Loaders®, Australia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Think;