// App.js
import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero"; 

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero /> 
      
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
        {/* Products content would go here */}
      </section>
      
      <section className="testimonials">
        <h2>Testimonials</h2>
        {/* Testimonials content would go here */}
      </section>
      
      <section className="specifications">
        <h2>Specifications</h2>
        {/* Specifications content would go here */}
      </section>
      
      <section className="sustainability">
        <h2>Sustainability</h2>
        {/* Sustainability content would go here */}
      </section>
      
      <section className="contact">
        <h2>Contact</h2>
        {/* Contact content would go here */}
      </section>
    </div>
  );
}

export default App;