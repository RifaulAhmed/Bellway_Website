// PopupForm.js
import React from 'react';
import './PopupForm.css';

const PopupForm = ({ onClose }) => {
  return (
    <div className="popup-form-overlay">
      <div className="popup-form">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="form-title font-bold">Contact Us</h2>
        <form>
          <label>
            Name
            <input type="text" name="name" required className='padI' />
          </label>
          <label>
            Email
            <input type="email" name="email" required className='padI' />
          </label>
          <label>
            Contact
            <input type="tel" name="contact" required className='padI' />
          </label>
          <label>
            Service
            <input type="text" name="service" required className='padI' />
          </label><br/>
          <div className="form-buttons items-center justify-center">
            <button type="submit" className="submit-button ">Submit</button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;