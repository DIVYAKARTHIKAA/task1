import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img9.jpg'
              text=' Medimagic Doctor weaves nature remedy into the fabric of healing'
              label='Doctor'
              
            />
            <CardItem
              src='images/img2.jpeg'
              text='Medimagic Nurse, as the waves of tranquility meet the shores of holistic well-being.'
              label='Nurse'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Navigate the vast seas of health with Medimagic Medical Records, charting a course through uncharted waters to unveil a personalized journey towards optimal well-being.'
              label='MedRec'
              
            />
            <CardItem
              src='images/img4.jpeg'
              text='Discover joy atop health peaks with Medimagic Patients, a personalized journey for your well-being.'
              label='Patient'
              
            />
            <CardItem
              src='images/img8.jpeg'
              text='Journey through health with Medimagic, your guided tour for a wellness ride.'
              label='MediMagic'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;