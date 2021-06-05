import React from 'react';
import '../App.css';
import './HeroSection.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './IMG_0096.jpg'
import image2 from './IMG_0144.jpg'
import image3 from './s.jpg'
import image4 from './mango2.jpg'



function HeroSection() {
  return (
    <div className='hero-container'>
<AliceCarousel autoPlay autoPlayInterval="2000" infinite='true' fadeOutAnimation='true' keysControlDisabled='true'>
      <img src={image1} className="hero-container" alt='Good'/>
      <img src={image2} className="hero-container" alt='Good'/>
      <img src={image3} className="hero-container" alt='Good'/>
      <img src={image4} className="hero-container" alt='Good'/>    
</AliceCarousel>
    </div>
  )
}

export default HeroSection;
