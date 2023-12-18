// Terms.js

import React from 'react';
import './Terms.css';
import Footer from './Footer';

function Terms() {
  return (
    <>
    <div className="terms-container">
      <h1 className="terms-heading">Terms of Service</h1>
      <div className="terms-content">
        <p>
          1) In consideration of your use of the MediMagic, you represent that you <span className="bold">are</span> of legal age to form a binding contract and are <span className="bold">not</span> a person barred from receiving services under the laws of the relevant jurisdiction.
        </p>

        <p>
          2) You agree to provide accurate and complete information about your medical history and current health status when using MediMagic services.
        </p>

        <p>
          3) MediMagic reserves the right to update or modify the terms of service at any time without prior notice. It is your responsibility to review the terms periodically.
        </p>

        <p>
          4) Any advice or information obtained through MediMagic should not be considered a substitute for professional medical consultation, diagnosis, or treatment.
        </p>

        <p>
          5) You are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your devices to prevent unauthorized access to your MediMagic account.
        </p>

        <p>
          6) MediMagic may collect and use personal information in accordance with its Privacy Policy. By using the app, you consent to such collection and use.
        </p>

        <p>
          7) You agree not to use MediMagic for any unlawful purposes or in a way that could damage, disable, overburden, or impair the service.
        </p>

        <p>
          8) MediMagic may, at its sole discretion, suspend or terminate your access to the service for violation of the terms of service or any applicable laws.
        </p>

        <p>
          9) You acknowledge that the medical information provided through MediMagic is for general informational purposes and should not be considered as professional medical advice.
        </p>

        <p>
          10) MediMagic disclaims any warranties or representations regarding the accuracy or completeness of the information provided and shall not be liable for any errors or omissions.
        </p>
      </div>
      <footer>
        <p className="footer-heading">© Copyright 2023 MediMagic. All rights reserved.</p>
      </footer>
    </div>
      <Footer/>
      </>
  );
}

export default Terms;
