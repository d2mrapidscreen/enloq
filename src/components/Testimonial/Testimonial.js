import React from 'react';
import './Testimonial.css';

const Testimonial = ({ quote, author, company, buttonText, onButtonClick }) => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-quote">
          "{quote}"
        </div>
        <div className="testimonial-author">
          - {author}, {company}
        </div>
        {buttonText && (
          <button className="testimonial-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonial;