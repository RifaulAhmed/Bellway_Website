import React from 'react';
import CNavbar from './CNavbar';
import './Product.css';
import Applications from './Applications';

const Product = () => {
  return (
    <>
      <CNavbar />
      <div className="rifaul-container">
        <div className="hollow-border-rectangle"></div>
        <div>
          <p className="we">WE</p>
          <p className="implement">IMPLEMENT</p>
          <p className="corporate">CORPORATE SOFTWARES</p>
        </div>
      </div>
      <Applications/>
    </>
  );
};

export default Product;

