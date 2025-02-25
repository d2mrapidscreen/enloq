// Navigation.js
import React from 'react';

function Navigation() {
  return (
    <nav className="navigation">

      <div className="nav-links">
        <a href="#events">EVENTS</a>
        <a href="#downloads">DOWNLOADS</a>
        <a href="#contact">CONTACT US</a>
        <div className="phone-number">
          <span>1300 993 563</span>
        </div>
      </div>
      {/* Social media icons can be implemented here */}
      <div className="social-icons">
        {/* These would be your social media icons */}
        {/* You can use appropriate icon libraries or SVG elements */}
      </div>
    </nav>
  );
}

export default Navigation;