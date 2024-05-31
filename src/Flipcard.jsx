// FlipCard.js
import React from 'react';
import './Flipcard.css' // Ensure to import the CSS file

const FlipCard = ({ image, title, description }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="flip-card-back" style={{backgroundColor:'white'}}>
          <h2 style={{color:'black',fontWeight:'bold'}}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
