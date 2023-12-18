import React from 'react';
import './Contact.css';
import Footer from './Footer';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  const handleSendMessageClick = () => {
    const form = document.querySelector('.medimagic-php-email-form');
    form.submit();
  };

  return (
    <>
      <div className="medimagic-container">
        <div className="medimagic-section-title">
          <h2>Contact Us</h2>
          <p>
            Welcome to Medimagic! Feel free to reach out to us for any inquiries or feedback. Our team is here to assist you.
          </p>
        </div>

        <div className="medimagic-contact-info">
          <div className="medimagic-address">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>123 Health Street, MediCity, Madurai-641238</p>
          </div>

          <div className="medimagic-email">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>medimagic@gmail.com</p>
          </div>

          <div className="medimagic-phone">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>+91 9876543241</p>
          </div>
        </div>

        <div className="medimagic-contact-form">
          <form onSubmit={handleSubmit} className="medimagic-php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="medimagic-name">Your Name</label>
                <input type="text" name="name" className="form-control" id="medimagic-name" required />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="medimagic-email">Your Email</label>
                <input type="email" className="form-control" name="email" id="medimagic-email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="medimagic-subject">Subject</label>
              <input type="text" className="form-control" name="subject" id="medimagic-subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="medimagic-message">Message</label>
              <textarea className="form-control" name="message" rows="10" required></textarea>
            </div>
           
            <div className="text-center">
              <button type="button" onClick={handleSendMessageClick}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;