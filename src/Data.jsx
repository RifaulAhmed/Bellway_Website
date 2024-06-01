import React from 'react'
import CNavbar from './CNavbar'
import './figma.css';
import Footer from './Footer'
import { useState,useEffect } from 'react';

import Ad6 from './Ad6';
const Data = () => {
  return (
    <>
    <CNavbar/>
    <div className='jb' 
       >


   <div className='bx'>
     
      {/* <div className="carousel-container">
     <div className="carousel">
       {images.map((src, index) => (
         <div className="carousel-item" key={index}>
           <img src={src} alt={`Carousel ${index}`} />
         </div>
       ))}
     </div>
   </div> */}
    <div>
     <img className='mlq' src="https://i.pinimg.com/564x/ec/ea/9a/ecea9acdf5c29011aa7d957df642fe01.jpg" alt="" />
     </div> 

      <div className='klu'  >
      <h1 className='hy' >Data</h1>
      <h1 className='hx'>Engineering </h1>
     
      </div>
      
   </div>
   </div>
   <div className='talk2' >
   <Ad6/>
   </div>
   <Footer/>
    </>
  )
}

export default Data