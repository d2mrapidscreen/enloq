// Loader.js
import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <section className="loader-section">
      <div className="loader-container">
        <div className="loader-image-container">
          <img 
            src={require("../../assets/images/SRDC_Enloq_Miniloader_EL800s.png")} 
            alt="Enloq Miniloader EL800s" 
            className="loader-image" 
          />
          
          {/* Numbered circles */}
          <div className="number-marker marker-1">
            <div className="number-circle">
              <span className="number">1</span>
            </div>
          </div>
          
          <div className="number-marker marker-2">
            <div className="number-circle">
              <span className="number">2</span>
            </div>
          </div>
          
          <div className="number-marker marker-3">
            <div className="number-circle">
              <span className="number">3</span>
            </div>
          </div>
          
          <div className="number-marker marker-4">
            <div className="number-circle">
              <span className="number">4</span>
            </div>
          </div>
          
          <div className="number-marker marker-5">
            <div className="number-circle">
              <span className="number">5</span>
            </div>
          </div>
          
          <div className="number-marker marker-6">
            <div className="number-circle">
              <span className="number">6</span>
            </div>
          </div>
          
          <div className="number-marker marker-7">
            <div className="number-circle">
              <span className="number">7</span>
            </div>
          </div>
          
          <div className="number-marker marker-8">
            <div className="number-circle">
              <span className="number">8</span>
            </div>
          </div>
          
          <div className="number-marker marker-9">
            <div className="number-circle">
              <span className="number">9</span>
            </div>
          </div>
          
          <div className="number-marker marker-10">
            <div className="number-circle">
              <span className="number">10</span>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

export default Loader;