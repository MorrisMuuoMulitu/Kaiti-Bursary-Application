import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [institution, setInstitution] = useState('');
      const [yearOfStudy, setYearOfStudy] = useState('');
      const [supportingDocuments, setSupportingDocuments] = useState(null);
      const [details, setDetails] = useState('');
      const [applicationStatus, setApplicationStatus] = useState('Not Submitted');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('institution', institution);
        formData.append('yearOfStudy', yearOfStudy);
        formData.append('supportingDocuments', supportingDocuments);
        formData.append('details', details);

        try {
          const response = await fetch('/api/applications', {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
          }

          const data = await response.json();
          console.log(data);
          setApplicationStatus('Submitted');
        } catch (error) {
          console.error('Error submitting application:', error);
          setApplicationStatus('Submission Failed');
        }
      };

      return (
        <div className="app-container">
          <header>
            <div className="header-content">
              <h1>Kaiti Constituency Bursary Program</h1>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#application-form">Application</a></li>
                  <li><a href="#about-us">About</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#contact-us">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <main>
            <section id="home" className="hero">
              <div className="hero-content">
                <h2>Empowering Your Education</h2>
                <p>
                  Welcome to the Kaiti Constituency Bursary Application portal. This program aims to support
                  college and university students residing in Kaiti, Makueni County, by providing financial
                  assistance for their education. Eligible students are encouraged to apply.
                </p>
                <p className="deadline"><b>Application Deadline:</b> [Insert Deadline Here]</p>
                <button className="apply-button" onClick={() => window.location.href='#application-form'}>Apply Now</button>
              </div>
            </section>

            <section id="application-form" className="form-section">
              <h2>Application Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Full Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                  <label htmlFor="institution">Institution:</label>
                  <input type="text" id="institution" value={institution} onChange={(e) => setInstitution(e.target.value)} required />
                </div>
                <div className="input-group">
                  <label htmlFor="yearOfStudy">Year of Study:</label>
                  <input type="number" id="yearOfStudy" value={yearOfStudy} onChange={(e) => setYearOfStudy(e.target.value)} required />
                </div>
                <div className="input-group">
                  <label htmlFor="supportingDocuments">Supporting Documents:</label>
                  <input type="file" id="supportingDocuments" onChange={(e) => setSupportingDocuments(e.target.files[0])} required />
                </div>
                <div className="input-group">
                  <label htmlFor="details">Details of Need:</label>
                  <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)} required />
                </div>
                <button className="submit-button" type="submit">Submit Application</button>
              </form>
              <p className="status">Application Status: {applicationStatus}</p>
            </section>

            <section id="about-us" className="about-section">
              <h2>About Us</h2>
              <p>
                The Kaiti Constituency Bursary Program was established to provide financial assistance to needy
                students pursuing higher education in colleges and universities. The program is committed to
                promoting access to education and empowering the youth of Kaiti Constituency.
              </p>
            </section>

            <section id="faq" className="faq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h3>Who is eligible to apply?</h3>
                <p>
                  Applicants must be residents of Kaiti Constituency, enrolled in a recognized college or
                  university, and demonstrate financial need.
                </p>
              </div>
            </section>

            <section id="contact-us" className="contact-section">
              <h2>Contact Us</h2>
              <p>
                For any inquiries, please contact the Kaiti Constituency Bursary Committee at:
              </p>
              <p>Email: <a href="mailto:[Insert Email Here]">[Insert Email Here]</a></p>
              <p>Phone: [Insert Phone Number Here]</p>
            </section>
          </main>

          <footer>
            <p>&copy; 2024 Kaiti Constituency Bursary Program. All rights reserved.</p>
            <p><a href="/terms-and-conditions.html">Terms and Conditions</a> | <a href="/privacy-policy.html">Privacy Policy</a></p>
          </footer>
        </div>
      );
    }

    export default App;
