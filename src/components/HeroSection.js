import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Your well-being, our specialty. <br />
        Join us on a journey to a healthier and happier you.</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to='/' className='btn btn--outline'>
          GET STARTED
        </Link>
        <Link to='/' className='btn btn--primary'>
          WELCOME TO MEDIMAGIC <i className='fas fa-laptop-medical' />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
