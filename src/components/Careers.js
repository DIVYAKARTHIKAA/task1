import React from 'react';
import './Careers.css';
import Footer from './Footer';

function CareersPage() {
  return (
    <>
    <div className="careers-page">
      <h1>Careers at MediMagic</h1>
      <p>We're on a mission to improve healthcare. Join our dedicated team and make a difference!</p>

      <div className="job-opening">
        <h2>Software Developer</h2>
        <p className="job-details">
          We're looking for passionate software developers to create cutting-edge solutions for our medical app.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Strong proficiency in JavaScript and React</li>
            <li>Experience with healthcare systems is a plus</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      <div className="job-opening">
        <h2>Medical Researcher</h2>
        <p className="job-details">
          Join our research team to contribute to groundbreaking medical discoveries and advancements.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Ph.D. in Medical Research or related field</li>
            <li>Experience in clinical trials</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      <div className="job-opening">
        <h2>Healthcare UX/UI Designer</h2>
        <p className="job-details">
          Craft intuitive and user-friendly interfaces to enhance the healthcare experience for our users.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Proven experience in UX/UI design</li>
            <li>Understanding of healthcare design principles</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      <div className="job-opening">
        <h2>Doctor</h2>
        <p className="job-details">
          We're seeking qualified doctors to join our medical team and provide exceptional patient care.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Medical degree and valid license</li>
            <li>Specialization in a specific field is preferred</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      <div className="job-opening">
        <h2>Patient Care Specialist</h2>
        <p className="job-details">
          Join us as a patient care specialist to ensure our users have a seamless and positive experience.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Excellent communication and interpersonal skills</li>
            <li>Experience in patient care or customer service</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      <div className="job-opening">
        <h2>Receptionist</h2>
        <p className="job-details">
          We're hiring receptionists to manage front desk operations and assist in administrative tasks.
        </p>
        <p className="job-details">Requirements:
          <ul>
            <li>Strong organizational and multitasking abilities</li>
            <li>Previous experience in a similar role is preferred</li>
          </ul>
        </p>
        <button className="apply-button">Apply Now</button>
      </div>

      
    </div>
    <Footer/>
    </>
  );
}

export default CareersPage;
