import React, { useState,useEffect } from 'react';
import './Ad.css'; // Assuming you will add your styles in App.css

function Ad4() {
  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState('');
  const [content1, setContent1] = useState('');
  const [buttonColors, setButtonColors] = useState(['red', '#1CD6CE', '#D895DA', '#EF2F88', '#9F70FD']);
  const [currentChangingButton, setCurrentChangingButton] = useState(0);


  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    switch (buttonId) {
      case 1:
        setContent(' Scalability');
        setContent1('Cloud platforms offer scalable resources, allowing applications to handle varying loads by automatically adjusting the amount of computational power and storage. This is ideal for applications with unpredictable or highly variable usage patterns.');
        break;
      case 2:
        setContent(' Cost Efficiency');
        setContent1('Cloud development reduces the need for significant upfront capital investment in hardware and infrastructure. Most cloud services operate on a pay-as-you-go model, where users only pay for the resources they use, making it cost-effective.');
        break;
      case 3:
        setContent('Global Reach');
        setContent1(' Cloud providers have data centers distributed across the globe, enabling developers to deploy applications closer to their users. This reduces latency and improves performance for a global audience.');
        break;
        case 4:
        setContent('Managed Services ');
        setContent1('Cloud platforms offer a range of managed services, such as databases, machine learning, and analytics, which abstract away much of the infrastructure management. This allows developers to focus on writing code and developing features rather than managing servers and infrastructure.');
        break;
        default:
            setContent('Devops Integration');
            setContent1('Cloud development supports continuous integration and continuous deployment (CI/CD) pipelines, facilitating automated testing, deployment, and scaling of applications. Tools and services from cloud providers streamline DevOps practices.');  
      
          }
        };
  useEffect(() => {
    // Set default content when component mounts
    handleButtonClick(1);

    const buttonInterval = setInterval(() => {
      setCurrentChangingButton((prevButton) => (prevButton + 1) % buttonColors.length);
    }, 3000); // Change button every 3 seconds

    return () => clearInterval(buttonInterval); // Clear interval on component unmount
  }, []);
  const getButtonStyle = (index) => {
    if (index === currentChangingButton) {
      return { backgroundColor: buttonColors[index], color: 'white' };
    }
    return {};
  };


  return (
    <div className='lp'>
    
    <div className='background'>
      
    <div className="appp">
      <div className="button-container">
        <div
          className={activeButton === 1 ? 'button active' : 'button'}
          style={getButtonStyle(0)} onClick={() => handleButtonClick(1)}
        >
       Scalability
        </div>
        <div
          className={activeButton === 2 ? 'button active' : 'button'}
          style={getButtonStyle(1)}  onClick={() => handleButtonClick(2)}
        >
      Cost Efficiency
        </div>
        <div
          className={activeButton === 3 ? 'button active' : 'button'}
          style={getButtonStyle(2)}    onClick={() => handleButtonClick(3)}
        >
      Global Reach
        </div>
        <div
          className={activeButton === 4 ? 'button active' : 'button'}
          style={getButtonStyle(3)}    onClick={() => handleButtonClick(4)}
        >
 Managed Services
        </div>
        <div
          className={activeButton === 5 ? 'button active' : 'button'}
          style={getButtonStyle(4)}    onClick={() => handleButtonClick(5)}
        >
Devops Integration
        </div>
        
      </div>
      <div className="content-container">
        
      <h1 className='content'>{content}</h1>
      <div className='content2'>
      <p className='content1'>{content1}</p>
      </div>
      <button id="mlp" class="animated-button">Click Here</button>
      </div>
    </div>
    </div> 
    </div>
  );
}

export default Ad4;
