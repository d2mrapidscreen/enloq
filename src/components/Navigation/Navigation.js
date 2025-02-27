// Navigation.js
import React, { useState, useEffect } from 'react';
import './Navigation.css';

import logoImage from '../../assets/images/enloq_loaders_nav_logo.png'; 
import phoneImage from '../../assets/images/Nav_phone_icon.png'; 

function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeSection, setActiveSection] = useState('');
  
  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle smooth scrolling and active section tracking
  useEffect(() => {
    // Function to handle smooth scrolling when clicking nav links
    const handleNavClick = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.getElementById(targetId.substring(1));
        
        if (targetElement) {
          // Smooth scroll to the target section
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page reload
          window.history.pushState(null, '', targetId);
          
          // Update active section
          setActiveSection(targetId.substring(1));
        }
      }
    };
    
    // Function to detect which section is currently in view
    const handleScroll = () => {
      const sections = ['events', 'downloads', 'contact'].map(id => 
        document.getElementById(id)
      ).filter(Boolean);
      
      if (sections.length) {
        const scrollPosition = window.scrollY + 100; // Adding offset for nav height
        
        for (const section of sections) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    // Add event listeners
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    // Clean up
    return () => {
      navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className="navigation-bar" role="navigation" aria-label="Main Navigation">
      {/* Logo image */}
      <div className="logo-container">
        <img src={logoImage} alt="enloq.loaders" className="logo-image" />
      </div>

      {/* Navigation links */}
      <div className="nav-links">
        <a href="#events" className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}>EVENTS</a>
        <a href="#downloads" className={`nav-link ${activeSection === 'downloads' ? 'active' : ''}`}>DOWNLOADS</a>
        <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>CONTACT US</a>
      </div>

      {/* Phone number - now clickable */}
      <div className="phone-container">
        {isMobile ? null : <img src={phoneImage} alt="phone" className="logo-image" />}
        <a href="tel:1300993563" className="phone-number" aria-label="Call 1300 993 563">1300 993 563</a>
      </div>
    </nav>
  );
}

export default Navigation;