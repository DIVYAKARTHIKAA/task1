import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';

import Testimonials from './components/Testimonials';
import CareersPage from './components/Careers';
import Terms from './components/Terms';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Sponsor from './components/Sponsor';
import Signup from './components/Signup';
import Login from './components/Login';




function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products/>} />
          
          <Route path='/Testimonials' element={<Testimonials />} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Contact' element={<Contact/>} />
          
          
          <Route path='/Careers' element={<CareersPage />} />
          <Route path='/Terms' element={<Terms />} />
          <Route path='/Sponsor' element={<Sponsor />} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
