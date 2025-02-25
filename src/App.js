import React from "react";
import "./App.css";
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">

      {/* Logo Bar */}
      <header className="top-bar">
        <div className="top-bar-container">
          <img 
            src="https://placehold.co/150x50" 
            alt="Logo" 
            className="logo"
          />
          <div className="contact-info">
            <a href="tel:+123456789">+1 234 567 89</a> | 
            <a href="mailto:info@example.com"> info@example.com</a>
          </div>
        </div>
      </header>

      {/* Add the Navigation component */}
      <Navigation />

      <section className="hero">
        <img 
          src="https://placehold.co/1400x600" 
          alt="Placeholder" 
          className="hero-image" 
        />
        <div className="hero-overlay">
          <h1>100% ELECTRIC + 100% WORK</h1>
        </div>
      </section>
      
      <section className="about">
        <h2>About</h2>
        <img 
          src="https://placehold.co/700x400" 
          alt="Placeholder" 
          className="about-image" 
        />
        <p className="about-text">
          The Enloq Loaders® E.V. series are high capacity articulated wheel loaders, material dumpers
          and all-terrain fork lifts in different size configurations that are 100% electric. Our entire range
          is designed for zero emission, low noise operation without compromising speed, power
          or operational length. Powered by BYD® Lithium Blade Battery technology our ra
        </p>
      </section>
      
      <section className="products">
        <h2>Products</h2>
      </section>
      
      <section className="testimonials">
        <h2>Testimonials</h2>
      </section>
      
      <section className="specifications">
        <h2>Specifications</h2>
      </section>
      
      <section className="sustainability">
        <h2>Sustainability</h2>
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
