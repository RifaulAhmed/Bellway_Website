import React from 'react'
// import Navbar from './Navbar'
import './Card2.css'
import CNavbar from './CNavbar';
import { useNavigate } from 'react-router-dom';
function Web() {
  
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/cloud');
    };
    const handleClick1 = () => {
      navigate('/dedicated');
    };
  
    const handleClick2 = () => {
      navigate('/data');
    };

    const cards = [
        { src: 'https://i.pinimg.com/236x/7b/3a/d5/7b3ad54b778e825c8f29d2b6e41b0e48.jpg',
          title: 'Cloud Development',
          description: 'Cloud development involves creating, deploying, and managing applications or services in cloud computing environments using resources and infrastructure provided by cloud service providers.',
        },
        {
          src:'https://i.pinimg.com/236x/20/ab/e6/20abe6be33dff5a191679001943279f6.jpg',
          title: 'Dedicated Hiring ',
          description: 'Dedicated hiring is the process of hiring professionals or teams exclusively for a specific project or organization, ensuring full commitment and focus on the assigned tasks.',
        },
        {
        src:'https://i.pinimg.com/564x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg',
          title: 'Data Engineering',
          description: 'Data engineering involves designing, constructing, and maintaining systems and architectures that collect, store, process, and analyze large volumes of data efficiently.',
        },
      ];
  return (
    
        <div>
          <CNavbar/>
          
          <h1 className='nbs' style={{marginTop:'150px',fontFamily:'sans-serif',fontWeight:'bold',color:'black'}}>Web Application Devlopement</h1>
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
      )
}

export default Web
