import '../../App.css'
import HeroSection from '../HeroSection';
import React from 'react';
import Navbar from '../Navbar';
import Cards from '../Cards';
import Footer from '../Footer';
function Home () {
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Cards/>
      <Footer/>
        </>
    );
}

export default Home;