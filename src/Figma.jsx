// src/ImageCarousel.js
import React from 'react';
import './figma.css';
import { useState,useEffect } from 'react';

import Ad from './Ad';
import CNavbar from './CNavbar';

import office from './assets/Office.jpg';



const Innerfigma = () => {
  

  return (
    <>
   
    <CNavbar/>
  
   


    
    <div className='jb' 
        style={{width:'84.4rem'}}>


    <div className='bx'>
      
       {/* <div className="carousel-container">
      <div className="carousel">
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Carousel ${index}`} />
          </div>
        ))}
      </div> */}
  
    
    <div>
     <img className='mlq' src={office} alt="" />
     </div> 
       <div className='klu'  >
       <h1 className='hy'>WEB </h1>
       <h1 className='hx'>DESIGN </h1>
       <h3 className='hz'>Figma</h3>
       </div>
       
    </div>
    </div>

    <div className='talk3'>
    <Ad/>
    </div>


   

   

     






    
    </>
  );
};

export default Innerfigma;

{/* <div className="carousel-container">
      <div className="carousel">
        {images.map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Carousel ${index}`} />
          </div>
        ))}
      </div>
    </div> */}
