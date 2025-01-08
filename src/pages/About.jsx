import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Kaiti Bursary Program</h1>
      <p>
        The Kaiti Constituency Bursary Program is a government initiative aimed at
        supporting students from financially challenged backgrounds to access
        quality education.
      </p>

      <section className="about-section">
        <h2>Kaiti Constituency</h2>
        <p>Kaiti Constituency is an electoral constituency No. 085, represented by Hon. Joshua K. Kimilu.</p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To have an economically stable constituency with equitable resources to everyone.</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>To harmonize and manage resources to facilitate equitable and sustainable development in Kaiti Constituency.</p>
      </section>

      <section className="about-section">
        <h2>Core Values</h2>
        <ul className="core-values">
          <li>Accountability</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Teamwork</li>
          <li>Servant Leadership</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
