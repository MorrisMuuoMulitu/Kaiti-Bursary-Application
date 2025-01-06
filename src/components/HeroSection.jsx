import React from 'react';
    import './HeroSection.css'; // Import the CSS file

    const HeroSection = () => {
      return (
        <section className="hero">
          <div className="hero-content">
            <h2>Empowering Your Education</h2>
            <p>
              Welcome to the Kaiti Constituency Bursary Application portal. This
              program aims to support college and university students residing in
              Kaiti Constituency by providing financial assistance for their
              education. Eligible students are encouraged to apply.
            </p>
            <p className="deadline">
              <b>Application Deadline:</b> [Insert Deadline Here]
            </p>
            <button
              className="apply-button"
              onClick={() => window.location.href = '#application-form'}
            >
              Apply Now
            </button>
          </div>
        </section>
      );
    };

    export default HeroSection;
