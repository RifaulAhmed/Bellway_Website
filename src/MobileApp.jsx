import React from 'react'

import './Card.css'
import { useNavigate } from 'react-router-dom';
import CNavbar from './CNavbar';
function Mobile() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/smart');
    };
    const handleClick1 = () => {
      navigate('/zomato');
    };
  
    const handleClick2 = () => {
      navigate('/multiservice');
    };

    const cards = [
        { src: 'https://i.pinimg.com/736x/c1/7a/d1/c17ad12b523af6352805e740b548e66b.jpg',
          title: 'Smart Store',
          description: '',
        },
        {
          src:'https://i.pinimg.com/564x/8c/98/ea/8c98eab6f9d871dd239bc32f93893e9f.jpg',
          title: 'Zomato Clone App | White-Label Food Delivery Solution',
          description: '',
        },
        {
        src:'https://i.pinimg.com/236x/19/c0/c5/19c0c523e4b54333b20d59c408e4c4e7.jpg',
          title: 'Multi Service Application',
          description: '',
        },
      ];
  return (
      <>
      <CNavbar/>
        <div>
          
        
          <h1 className='nbs' style={{marginTop:'150px'}}>Mobile Application Devlopement</h1>
          <div className="card-container">
              {cards.map((card, index) => (
                <div key={index} className="card">
                  <img src={card.src} alt={card.title} className="card-image" />
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                  
                  </div>
                </div>
              ))}
              <div>
                <div className='bi'>
                <button  onClick={handleClick} class="animated-button">Click Here</button>
                <button  onClick={handleClick1} class="animated-button1" style={{position:'relative',left:'-20px'}}>Click Here</button>
                <button  onClick={handleClick2} class="animated-button2" style={{position:'relative',left:'70px'}}>Click Here</button>
                </div>
              
              </div>
                
            </div>
    
        </div>
        
        </>
      )
}

export default Mobile
