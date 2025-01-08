import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Details</h1>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Postal Address</h3>
          <p>P.O. Box 1 – 90301, Okia - Makueni</p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>0720792224</p>
        </div>

        <div className="contact-item">
          <h3>Website</h3>
          <p>
            <a href="https://kaiti.ngcdf.go.ke" target="_blank" rel="noopener noreferrer">
              kaiti.ngcdf.go.ke
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:cdfkaiti@ngcdf.go.ke">
              cdfkaiti@ngcdf.go.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
