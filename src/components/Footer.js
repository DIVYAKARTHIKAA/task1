import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Subscribe to our newsletter for exclusive wellness offers and medical insights.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/Aboutus'>How it works</Link>
            <Link to='/Testimonials'>Testimonials</Link>
            <Link to='/Careers'>Careers</Link>
            <Link to='/Terms'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Contact'>Support</Link>
            <Link to='/Sponsor'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='https://www.youtube.com/'>Youtube</Link>
            <Link to='https://twitter.com/?lang=en'>Twitter</Link>
            <Link to='https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&service=mail&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>Gmail</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MEDIMAGIC
                <i class='fas fa-hospital-user'/>
            </Link>
          </div>
          <small class='website-rights'>MEDIMAGIC © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/?lang=en'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://in.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/&service=mail&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
              target='_blank'
              aria-label='Mail'
            >
              <i class='fab fa-google'/>
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;