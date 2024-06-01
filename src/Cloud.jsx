import React from 'react'

import './figma.css';
import Footer from './Footer'
import { useState,useEffect } from 'react';

import Ad4 from './Ad4';
import CNavbar from './CNavbar';



// const images = [
 
// 'https://i.pinimg.com/236x/51/75/f2/5175f2a55bc8d44fc4c1b132477ac3ff.jpg','https://i.pinimg.com/564x/57/d2/d7/57d2d7077a1e01227af182887b9a1adc.jpg','https://i.pinimg.com/564x/f3/83/cc/f383cc5c823c814aa3595b1800f64475.jpg'
// ];
function Cloud() {
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
     </div> */}
      <div>
     <img className='mlq' src="https://i.pinimg.com/564x/ab/a5/9e/aba59e7177c4256126ab8b7b675f7017.jpg" alt="" />
     </div> 
     

     <div className='klu'  >
      <h1 className='hy' >CLOUD </h1>
      <h1 className='hx'>DEVELOPEMENT </h1>
     
      </div>
   </div>




      
      
   </div>
   
   <div className='ad4'>
   <Ad4/>
   </div>


  

  

    
<Footer/>





   
   </>
 );
};


export default Cloud