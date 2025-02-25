// Navigation.js
import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation-bar">
      {/* Logo on the left */}
      <div className="logo-container">
        <span className="logo-text">enloq.</span>
        <span className="logo-text green">loaders</span>
      </div>

      {/* Navigation links in the center */}
      <div className="nav-links">
        <a href="#events" className="nav-link">EVENTS</a>
        <a href="#downloads" className="nav-link">DOWNLOADS</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
      </div>

      {/* Phone number on the right */}
      <div className="phone-container">
        <span className="phone-number">1300 993 563</span>
      </div>
    </nav>
  );
}

export default Navigation;