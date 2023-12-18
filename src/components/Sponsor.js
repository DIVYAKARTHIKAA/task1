

import React from 'react';
import './Sponsor.css'; 
import Footer from './Footer';

const Sponsor = () => {
  return (
    <>
      <div className="medi-magic-sponsor-container">
        <h2>MediMagic Sponsor</h2>
        <p>Support the MediMagic app and become a sponsor!</p>

        <div className="medi-magic-sponsor-feature">
          <div className="medi-magic-sponsor-icon">
            <img
              className="img-responsive"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0T-yoEEYnfHOdmyMh99cRJG8xiHL3CIABA&usqp=CAU"
              alt="Sponsor Icon"
            />
          </div>
          <div className="medi-magic-sponsor-details">
            <h3>Get featured on our platform</h3>
            <p>
              Showcase your commitment to healthcare. Your sponsorship comes with a special badge, indicating your dedication to our medical community.
              <a href="https://medimagic.com/d/united-states?utm_source=app&utm_medium=payment%20page%20link&utm_content=see%20how%20listings%20look%20like" target="_blank" rel="noopener noreferrer">
                See how it looks like
              </a>
              .
            </p>
          </div>
        </div>

        <div className="medi-magic-sponsor-refund-info">
          <center>
            <p>*30-day no-questions-asked refunds, less payment gateway fees, if no benefits were used.</p>
          </center>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sponsor;
