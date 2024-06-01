import React from 'react';
import CNavbar from './CNavbar';
import './Product.css';
import Applications from './Applications';
import Footer from './Footer'
const Product = () => {
  return (
    <>
      <CNavbar />
      <div className="rifaul-containerTT">
        <div className="hollow-border-rectangleTT"></div>
        <div>
          <p className="weTT">WE</p>
          <p className="implementTT">IMPLEMENT</p>
          <p className="corporateTT">CORPORATE SOFTWARES</p>
        </div>
      </div>
      <Applications/>
      <Footer/>
    </>
  );
};

export default Product;

