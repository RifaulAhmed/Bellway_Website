import React, { useState,useEffect } from 'react';
import './Ad.css'; // Assuming you will add your styles in App.css

function Ad6() {
  const [activeButton, setActiveButton] = useState(null);
  const [content, setContent] = useState('');
  const [content1, setContent1] = useState('');
  const [buttonColors, setButtonColors] = useState(['red', '#1CD6CE', '#D895DA', '#EF2F88', '#9F70FD']);
  const [currentChangingButton, setCurrentChangingButton] = useState(0);


  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    switch (buttonId) {
      case 1:
        setContent('Data Pipeline Development');
        setContent1('Data engineers create data pipelines that automate the extraction, transformation, and loading (ETL) of data from various sources into data warehouses, data lakes, or other storage systems. These pipelines ensure that data is processed and made available for analysis efficiently and reliably');
        break;
      case 2:
        setContent(' Scalability');
        setContent1('Data engineering solutions are designed to handle large volumes of data and scale with the growth of an organization data needs. This involves building systems that can manage increasing data loads without compromising performance');
        break;
      case 3:
        setContent('Data Integration');
        setContent1('Data engineers integrate data from multiple disparate sources, ensuring that the data is combined and standardized in a way that it can be used effectively for analysis. This involves handling different data formats and structures ');
        break;
        case 4:
        setContent('Data Quality and Cleansing');
        setContent1(' Ensuring high data quality is a crucial aspect of data engineering. This involves implementing processes to clean and validate data, remove duplicates, handle missing values, and correct errors to ensure the data accuracy and reliability.');
        break;
        default:
            setContent('Real-Time Data Processing');
            setContent1('Many data engineering solutions involve the processing of real-time data streams. This is essential for applications that require up-to-date information, such as fraud detection, stock trading, or real-time analytics. ')
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
   Data Pipeline Development
        </div>
        <div
          className={activeButton === 2 ? 'button active' : 'button'}
          style={getButtonStyle(1)}  onClick={() => handleButtonClick(2)}
        >
    Scalability
        </div>
        <div
          className={activeButton === 3 ? 'button active' : 'button'}
          style={getButtonStyle(2)}    onClick={() => handleButtonClick(3)}
        >
      Data Integration
        </div>
        <div
          className={activeButton === 4 ? 'button active' : 'button'}
          style={getButtonStyle(3)}    onClick={() => handleButtonClick(4)}
        >
Data Quality and Cleansing
        </div>
        <div
          className={activeButton === 5 ? 'button active' : 'button'}
          style={getButtonStyle(4)}    onClick={() => handleButtonClick(5)}
        >
Real-Time Data Processing
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

export default Ad6;
