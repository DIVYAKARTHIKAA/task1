import React from 'react';
import './Testimonials.css'; // Make sure to adjust the CSS file accordingly
import Footer from './Footer';

function Testimonials() {
  return (
    <>
      <div className='h11'>What Our Customers Are Saying</div>
      <div className="medical-testimonials">
        <div className="medical-testimonial">
          <h3>"Revolutionized my healthcare experience"</h3>
          <p>
            The MediMagic has truly transformed the way I manage my health. The user-friendly interface, coupled with insightful features, ensures I stay on top of my well-being effortlessly.{' '}
            <span className="testimonial-author">John D.</span>
          </p>
        </div>
        <div className="medical-testimonial">
          <h3>"Efficient and reliable medical assistance"</h3>
          <p>
            MediMagic provides prompt access to medical resources and assistance. From virtual consultations to health records, it's become an indispensable tool for my family's healthcare needs.{' '}
            <span className="testimonial-author">Sarah M.</span>
          </p>
        </div>
        <div className="medical-testimonial">
          <h3>"Empowering me to take control of my health"</h3>
          <p>
            I appreciate how MediMagic empowers me with personalized health insights and reminders. It's like having a dedicated health companion in my pocket.{' '}
            <span className="testimonial-author">Alex H.</span>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Testimonials;
