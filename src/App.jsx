import React, { useState } from 'react';
    import './App.css';
    import HeroSection from './components/HeroSection';

    function App() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [institution, setInstitution] = useState('');
      const [yearOfStudy, setYearOfStudy] = useState('');
      const [nationalId, setNationalId] = useState(null);
      const [schoolId, setSchoolId] = useState(null);
      const [feeStructure, setFeeStructure] = useState(null);
      const [parentsId, setParentsId] = useState(null);
      const [parentsDeathCertificate, setParentsDeathCertificate] = useState(null);
      const [details, setDetails] = useState('');
      const [applicationStatus, setApplicationStatus] = useState('Not Submitted');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('institution', institution);
        formData.append('yearOfStudy', yearOfStudy);
        formData.append('nationalId', nationalId);
        formData.append('schoolId', schoolId);
        formData.append('feeStructure', feeStructure);
        formData.append('parentsId', parentsId);
        formData.append('parentsDeathCertificate', parentsDeathCertificate);
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
            <HeroSection />

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
                  <label htmlFor="nationalId">National ID:</label>
                  <input type="file" id="nationalId" onChange={(e) => setNationalId(e.target.files[0])} required />
                </div>
                <div className="input-group">
                  <label htmlFor="schoolId">School ID:</label>
                  <input type="file" id="schoolId" onChange={(e) => setSchoolId(e.target.files[0])} required />
                </div>
                <div className="input-group">
                  <label htmlFor="feeStructure">Fee Structure:</label>
                  <input type="file" id="feeStructure" onChange={(e) => setFeeStructure(e.target.files[0])} required />
                </div>
                <div className="input-group">
                  <label htmlFor="parentsId">Parents ID (optional):</label>
                  <input type="file" id="parentsId" onChange={(e) => setParentsId(e.target.files[0])} />
                </div>
                <div className="input-group">
                  <label htmlFor="parentsDeathCertificate">Parents Death Certificate (optional):</label>
                  <input type="file" id="parentsDeathCertificate" onChange={(e) => setParentsDeathCertificate(e.target.files[0])} />
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
            <div className="footer-container">
              <div className="footer-section">
                <h3>About Us</h3>
                <p>
                  The Kaiti Constituency Bursary Program was established to provide financial assistance to needy
                  students pursuing higher education in colleges and universities. The program is committed to
                  promoting access to education and empowering the youth of Kaiti Constituency.
                </p>
              </div>
              <div className="footer-section">
                <h3>Contact Us</h3>
                <p>
                  For any inquiries, please contact the Kaiti Constituency Bursary Committee at:
                  <br />
                  [Insert Contact Information Here]
                </p>
              </div>
            </div>
            <p>&copy; 2024 Kaiti Constituency Bursary Program. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
