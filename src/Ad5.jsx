import React, { useState,useEffect } from 'react';
import './Ad.css'; // Assuming you will add your styles in App.css

function Ad5() {
  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState('');
  const [content1, setContent1] = useState('');
  const [buttonColors, setButtonColors] = useState(['red', '#1CD6CE', '#D895DA', '#EF2F88', '#9F70FD']);
  const [currentChangingButton, setCurrentChangingButton] = useState(0);


  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    switch (buttonId) {
      case 1:
        setContent('Exclusive Focus');
        setContent1('Dedicated professionals or teams work exclusively on your projects, ensuring that they are fully committed and focused on your specific needs and goals without being distracted by other assignments');
        break;
      case 2:
        setContent(' Customized Recruitment');
        setContent1('The hiring process is tailored to find professionals with the exact skill sets and experience required for the specific project or client, ensuring a perfect match for the job');
        break;
      case 3:
        setContent('Cost Efficiency');
        setContent1(' Dedicated hiring can be more cost-effective than in-house hiring, especially for short-term projects or when specific expertise is required. It reduces the overhead costs associated with full-time employees, such as benefits and office space');
        break;
        case 4:
        setContent('Flexibility and Scalability');
        setContent1(' Organizations can easily scale their dedicated teams up or down based on project demands. This flexibility allows businesses to respond quickly to changing needs without the long-term commitment of permanent hires');
        break;
        default:
            setContent('Direct Control and Communication');
            setContent1('Clients have direct access to and control over the dedicated team, often including regular communication, progress updates, and direct involvement in the project management process')
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
    Exclusive Focus
        </div>
        <div
          className={activeButton === 2 ? 'button active' : 'button'}
          style={getButtonStyle(1)}  onClick={() => handleButtonClick(2)}
        >
     Customized Recruitment
        </div>
        <div
          className={activeButton === 3 ? 'button active' : 'button'}
          style={getButtonStyle(2)}    onClick={() => handleButtonClick(3)}
        >
      Cost Efficiency
        </div>
        <div
          className={activeButton === 4 ? 'button active' : 'button'}
          style={getButtonStyle(3)}    onClick={() => handleButtonClick(4)}
        >
Flexibility and Scalability
        </div>
        <div
          className={activeButton === 5 ? 'button active' : 'button'}
          style={getButtonStyle(4)}    onClick={() => handleButtonClick(5)}
        >
Direct Control and Communication
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

export default Ad5;
