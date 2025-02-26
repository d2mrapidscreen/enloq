// Footer.js
import React from 'react';
import './Footer.css';

import logoImage from '../../assets/images/enloq_loaders_nav_logo.png'; 
import loaderImage from '../../assets/images/icon_loader_leaf_green.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and loader icon */}
        <div className="footer-logo-container">
          <img src={loaderImage} alt="Loader" className="loader-image" />
          <div className="logo-text-container">
            <img src={logoImage} alt="enloq.loaders" className="footer-logo-image" />
            <div className="footer-address">
              <p>1/8 Bowen Crescent, West Gosford</p>
              <p>NSW 2250 Australia</p>
              <p className="footer-phone">1300 993 563</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;