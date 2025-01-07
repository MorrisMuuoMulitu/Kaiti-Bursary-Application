import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="deadline-badge">
            Application Deadline: December 31, 2024
          </div>
          <h1>Empowering Education in Kaiti Constituency</h1>
          <p>
            We're committed to supporting students in their academic journey. 
            Apply now for financial assistance and take the next step towards 
            achieving your educational goals.
          </p>
          <div className="cta-buttons">
            <Link to="/apply" className="cta-button primary">
              Apply Now
            </Link>
            <Link to="/about" className="cta-button secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
