import React from 'react';
import './Home.css';
import Card from './Card';
import Slider from 'react-slick';
import FlipCard from './Flipcard';
import Mobile from './assets/Photo.jpeg';
import Web from './assets/Ai.jpg';
import App from './assets/AI2.jpg';
import Cloud from './assets/AI5.jpg';
import App2 from './assets/AI8.jpg';
import Dedicated from './assets/Reduced.jpg';
import Digital from './assets/Marketing.jpg';
import Testing from './assets/waterfall-model.jpg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recent from './Recent';
import Online from './assets/Online.jpg';
import Mentor from './assets/Mentoring.jpg';
import Client1 from './assets/Client1.png'
import Client2 from './assets/Client2.jpg';
import Client3 from './assets/Client3.jpg';
import Client4 from './assets/Client4.jpg';
import Live from './assets/Live.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BoxSlider.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from './assets/Google2.jpg';
import CNavbar from './CNavbar';
import Header from './Header';
import Footer from './Footer';
// import Form4 from './Form4'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';
// import Product from './Product';
// import Service from './Service';
// import CaseStudy from './CaseStudy';
// import Blog from './Blog';
const Wrapper = styled.div`
  justify-content: space-around;
  margin: auto;
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const boxes = [
    {
      id: 1,
      text: '',
      image: Client1
    },
    {
      id: 2,
      text: '',
      image: Client2
    },
    {
      id: 3,
      text: '',
      image: Client3
    },
    {
      id: 4,
      text: '',
      image: Client4
    }
  ];
  const cardsData = [
    {
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/grid-ur-fine-doctor-app-compressed1689941181.jpg',
      title: 'Ur Fine',
      description: 'Graphic Design Digital Marketing',
    },
    {
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/grid-bellway-food-poster-compressed1689941183.jpg',
      title: 'D-cart eats',
      description: 'Website Development, App Development',
    },
    {
      image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/grid-lazy-bazar-21692356159.jpg',
      title: 'Lazy Bazar',
      description: 'Website Development, App Development',
    },
  ];

  const cards = [
    {
      image: Web,
      title: 'Graphic Designing',
      description: 'Creating scalable and robust web solutions.'
    },
    {
      image: App,
      title: 'Web Application Development',
      description: 'Implementing AI to enhance business processes.'
    },
    {
      image: Cloud,
      title: 'Cloud Development',
      description: 'Offering cloud solutions to streamline your operations.'
    },
    {
      image: App2,
      title: 'Mobile Application',
      description: 'Integrating various apps to work seamlessly together.'
    },
    {
      image: Dedicated,
      title: 'Dedicated Support',
      description: 'Providing dedicated support for your projects.'
    },
    {
      image: Digital,
      title: 'Digital Marketing',
      description: 'Boosting your online presence with digital marketing strategies.'
    }
  ];

  const cards2 = [
    {
      image: Online,
      title: 'Online and Offline Support',
      description: 'Get comprehensive support for your business with our online and offline services!',
    },
    {
      image: Mentor,
      title: 'Mentor Support',
      description: 'Looking for professional guidance and support? Our mentorship program offers expert advice and resources to help you!'
    },
    {
      image: Live,
      title: 'Live Chat Support',
      description: 'Customer satisfaction with our reliable 24/7 live chat Support. Real-time solutions, and immediate responses!'
    },
    {
      image: Google,
      title: 'Google Meet Support',
      description: 'Get top-notch Google Meet Support! Upgrade your online meetings with expert tips, fixes, and 24/7 assistance!'
    }
  ];

  return (
    <div >
      <CNavbar/>
            <Header /> 
          
      {/* <Form4/> */}
      <div className="container mx-auto mt-5">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="title">Why Choose Bellway Infotech?</p>
        </div>
        <div className="col-md-4 order-md-3 d-flex align-items-center mt-4 img-container">
          <img src={Mobile} alt="Mobile representation" className="img-fluid1" />
        </div>
        <div className="col-md-6 order-md-1 d-flex align-items-center hey">
          <p className="description">
            We, at Bellway Infotech, are a team of thinkers and doers, who will constantly look for different ways to improve things using the latest technology. In fact, we have worked with the top enterprises and on the demand delivery startups to solve organizational challenges, boost profit and engage their audience. Throughout these years, here’s what we have achieved.
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto mt-5">
      <div className="row mt-5 ml-16">
        <div className="col-12 text-center">
          <h1 className="professional-services">Professional Services</h1>
        </div>
        <div className="col-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-content-center mt-5">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              className="m-3"
            />
          ))}
        </div>
      </div>
    </div>

      {/* <div className="row mt-5">
        <div className="col-12 text-center">
          <h1 className='our-specialities'>Our Specialities</h1>
        </div>
        <div className="col-12 d-flex mt-5">
          {cards2.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              className="m-3 "
            />
          ))}
        </div>
      </div> */}

      <div>
        <div>
          <h1 className='our-process'>Our Process</h1>
          <div className="col-9 ml-16 justify-content-center">
          <img src={Testing} alt="Process representation" className="img-fluid w-3/3 mt-2"/>
        </div>
        </div>
      </div>

      <div>
        <div className="col-12 text-center">
          <h1 className='recent-work'>Our Recent Work</h1>
        </div>
        <div className="col-11 mt-5  d-flex flex-wrap justify-content-center">
          <Wrapper className="row">
            {cardsData.map((card, index) => (
              <Recent
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                className="m-3"
              />
            ))}
          </Wrapper>
        </div>
      </div>

      

      <div>
    <div className="w-full text-center">
      <h1 className="appreciation ">Appreciation from Clients</h1>
    </div>
    <div className="mt-10 ml-10 px-10 py-10 card-abc">
      <Slider {...settings}>
        {boxes.map(box => (
          <div key={box.id} className="box px-2">
            <img style={{height:'300px'}} src={box.image} alt={box.text} className="img-fluid6 w-full h-20px"/>
            <p>{box.text}</p>
          </div>
        ))}
      </Slider>
    </div> 
  </div>
      
      <Footer/>
  
    </div>

  );
}

export default Home;
