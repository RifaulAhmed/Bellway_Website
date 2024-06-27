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
import Client1 from './assets/Client1.jpg'
import Client2 from './assets/Client2.jpg';
import Client3 from './assets/Client3.jpg';
import Client4 from './assets/Client4.jpg';
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
import HomeServices from './HomeServices';
import sister from './assets/sistercom2.png';
import { Helmet } from "react-helmet";
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
      name: 'Radomi',
      position: '( Founder, POPOPDEAL )',
    },
    {
      id: 2,
      text: '"Highly recommend tapping into their unparalleled expertise and innovative solutions for any business striving to excel and thrive in today\'s fiercely competitive landscape."',
      image: Client2,
      name: 'Gregory Doe',
      position: '( Founder )',
    },
    {
      id: 3,
      text: '"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success."',
      image: Client3,
      name: 'Kendra',
      position: '( MFounder, The KB Hair )',
    },
    {
      id: 4,
      text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
      image: Client4,
      name: 'Karen Agresti',
      position: '( Founder )',
    }
  ];;

  return (
    <div >
      <Helmet>
        <title>Web & App Development Company in India - BELLWAY INFOTECH </title>
        <meta name="description" content="We Work in IT services, App Development, Web Development & Digital Marketing at Bellway Infotech. We leverage technology for business process transformation." />

      </Helmet>
      <CNavbar />

      <Header />

      <WhyBell />

      <HomeServices />

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
          <h1 className="appreciation text-4xl font-bold mb-8 mt-24">Stories From Our Clients</h1>
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
      <div className=" mx-auto px-4 py-16 justify-start">
        <h1 className="text-5xl font-bold mb-4 text-black">We'll help you get started</h1>
        <div className='flex items-center justify-between'>
        <p className=" text-[18px] text-black ">
          Browse our blog, educational videos, and customer stories to find <br />
          what you need to succeed as a Webflow freelancer.
        </p>
        <div className="text-end">
          <a href="/contact" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease text-[20px]">Dive In</span>
            <span class="relative invisible">Button Text</span>
          </a>
          </div>
          </div>
      </div>

      <Footer />

    </div>

  );
}

export default Home;
