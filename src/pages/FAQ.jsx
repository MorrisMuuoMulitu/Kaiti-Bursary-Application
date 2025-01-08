import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h3>Who is eligible to apply for the bursary?</h3>
        <p>
          The bursary is available to students who:
          <ul>
            <li>Are residents of Kaiti Constituency</li>
            <li>Are enrolled in recognized educational institutions</li>
            <li>Demonstrate financial need</li>
            <li>Have good academic performance</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3>What documents are required for application?</h3>
        <p>
          Applicants need to provide:
          <ul>
            <li>National ID or Birth Certificate</li>
            <li>Admission letter from the institution</li>
            <li>Fee structure from the institution</li>
            <li>Academic transcripts</li>
            <li>Recommendation letter from local administrator</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3>How are bursary recipients selected?</h3>
        <p>
          Selection is based on:
          <ul>
            <li>Demonstrated financial need</li>
            <li>Academic performance</li>
            <li>Completeness of application</li>
            <li>Residency in Kaiti Constituency</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3>When will I know if my application is successful?</h3>
        <p>
          Successful applicants will be notified through:
          <ul>
            <li>SMS to the provided phone number</li>
            <li>Email to the provided email address</li>
            <li>Public announcement on our website</li>
          </ul>
          Notification typically occurs within 6 weeks after the application deadline.
        </p>
      </div>

      <div className="faq-item">
        <h3>Can I apply more than once?</h3>
        <p>
          Yes, students can apply each academic year, provided they continue to meet the eligibility criteria.
        </p>
      </div>

      <div className="faq-item">
        <h3>What expenses does the bursary cover?</h3>
        <p>
          The bursary covers:
          <ul>
            <li>Tuition fees</li>
            <li>Accommodation costs</li>
            <li>Learning materials</li>
            <li>Other approved educational expenses</li>
          </ul>
        </p>
      </div>

      <div className="faq-item">
        <h3>How can I check my application status?</h3>
        <p>
          You can check your application status by:
          <ul>
            <li>Logging into your account on our portal</li>
            <li>Contacting our office via phone or email</li>
            <li>Visiting our offices during working hours</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
