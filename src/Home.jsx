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
import Testing from './assets/ourprocessnew.png';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recent from './Recent';
import Online from './assets/Online.jpg';
import Mentor from './assets/Mentoring.jpg';
import Client1 from './assets/face1.jpeg'
import Client2 from './assets/face2.jpeg';
import Client3 from './assets/face3.jpeg';
import Client4 from './assets/face4.jpeg';
import Live from './assets/Live.jpg';
// import Slider from 'react-slick';
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
import Industries from './Industries'
import Faq from './HomeFaq';
import Solutions from './Solutions';
import './cards.css'
import HomeSlider from './HomeSlider';
import WhyBell from './WhyBell';
// import HomeServices from './HomeServices';
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
      text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
      image: Client1,
      name: 'Ana Perez',
      position: '( CEO, ITgers )',
    },
    {
      id: 2,
      text: '"Highly recommend tapping into their unparalleled expertise and innovative solutions for any business striving to excel and thrive in today\'s fiercely competitive landscape."',
      image: Client2,
      name: 'Nick Divris',
      position: '( CTO, Coursera )',
    },
    {
      id: 3,
      text: '"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success."',
      image: Client3,
      name: 'Yuki ',
      position: '( Manager, Alpine )',
    },
    {
      id: 4,
      text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
      image: Client4,
      name: 'Zehan Darula',
      position: '( Designer, E-papcups )',
    }
  ];;
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

  const settingsnew = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  return (
    <div >
      <CNavbar />

      <Header />

      <WhyBell />

      {/* <HomeServices/> */}

      <Industries />

      <div className="flex flex-col items-center">
        <h1 className='our-process'>Our Process</h1>
        <div className="flex justify-center">
          <img src={Testing} alt="Process representation" className="img-fluid w-120 h-120" />
        </div>
      </div>

      <HomeSlider />

      <Solutions />

      <div className="w-full overflow-hidden">
        <div className="w-full text-center">
          <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider {...settings}>
            {boxes.map((box, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                  <div className="client-image mb-4">
                    <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                  </div>
                  <div className="text-gray-700 text-lg font-bold mb-1">{box.name}</div>
                  <div className="text-gray-600 text-sm">{box.position}</div>
                  <div className="text-gray-700 text-lg">{box.text}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <br /><br />

      <Faq />

      <Footer />

    </div>

  );
}

export default Home;
