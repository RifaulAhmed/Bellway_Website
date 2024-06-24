
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CNavbar from './CNavbar';
import './Product2.css'
import './ai.css'
// import FaqPage from './AIFaq';
import burgir from './assets/grocery2.jpg';
import burgir2 from './assets/grocery.jpg';
import image4 from './assets/Movie1.png'
import image5 from './assets/Movie2.png'
import {Helmet} from "react-helmet";
import image6 from './assets/Movie3.png'
import image7 from './assets/Movie4.png'
import image8 from './assets/Movie5.png'
import image9 from './assets/Movie6.png'
import image1 from './assets/image 482.png'
import Footer from './Footer';
import icon1 from './assets/Icon1.png'
import icon2 from './assets/Icon2.png'
import icon3 from './assets/Icon3.png'
import icon4 from './assets/Icon4.png'
import icon5 from './assets/Icon5.png'
import icon6 from './assets/Icon6.png'
// import centerImage from './assets/Vector (2).png'
import image from './assets/image 527.png'
import Slider2 from 'react-slick';
import dpImage from './assets/dp-img3.jpg'
import HomeTestimonials from './HomeTestimonials'
import burgir5 from './assets/movies4.png'
import background from './assets/grocery6.jpg'
import bbq from './assets/bbq2.jpeg'
import ProductStackCards from './ProductStackCards';

const Product2 = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    }

    const cardData = [
        { heading: "Review and Ratings" },
        { heading: "Safety Measures" },
        { heading: "Contactless Delivery" },
        { heading: "Earning Page" },
        { heading: "Update Availability" },
        { heading: "Prescription Upload" },
        { heading: "Multiple Languages" },
        { heading: "Instant Pop-Up Notification" },
        { heading: "Filter Option" },
        { heading: "SEO Friendly" },
        { heading: "100% Customizable" },
        { heading: "Take Away or Delivery Option"},
    ];

    const cardData1 = [
        { heading: "Free App Deployment", image: icon1 },
        { heading: "Free Bug Support", image: icon2 },
        { heading: "100% Source Code", image: icon3 },
        { heading: "Support After App Rejection ", image: icon4 },
        { heading: "Free Technical Support", image: icon5 },
        { heading: "On-Time Support", image: icon6 }
    ];

    const ImageRow = ({ images }) => (
        <div className="flex flex-wrap justify-center items-center mt-10 space-x-4">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
                    style={{ position: 'relative', top: `${image.position}px`, left: `${image.position1}px` }}
                >
                    <img
                        src={image.url}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg transform transition duration-500 hover:scale-105 hover:rotate-2 hover:shadow-xl"
                        style={{ maxWidth: '100%', boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)', borderRadius: '15.2%' }} // Added to maintain responsiveness
                    />
                </div>
            ))}
        </div>
    );

    const imagesWithPositions = [
        { url: image4, position: 230, position1: -60 },
        { url: image5, position: 5 },
        { url: image6, position: 230, position1: 35 },
        { url: image7, position: 40, position1: 82 },
        { url: image8, position: 80, position1: -5 },
        { url: image9, position: 77, position1: 335 },
    ];

    const Card1 = ({ heading, image }) => (
        <div style={{ backgroundColor: '#344C64' }} className="flex flex-col items-center shadow-lg rounded-lg p-6 text-center">
            <img src={image} alt={heading} className="w-20 h-20 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-white">{heading}</h3>
        </div>
    );

    const Card = ({ heading }) => (
        <div className="bg-white flex flex-col shadow-lg rounded-lg p-3 text-center">
            <h3 className="text-1xl font-bold">{heading}</h3>
        </div>
    );

    const technologies = [
        { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1', title: 'Laravel' }, // Replace with actual URLs
        { id: 2, image: 'https://i.pinimg.com/564x/56/0c/43/560c4353b21b4948e5f0e9508ea07597.jpg', name: 'Tech 2', title: 'Laravel' },
        { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3', title: 'Laravel' },
        { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4', title: 'Laravel' },
        { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5', title: 'Laravel' },
        { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6', title: 'Laravel' },
        { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7', title: 'Laravel' },
        { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8', title: 'Laravel' }
    ];
    const smallCardData1 = [
        { heading: "Admin Panel(Web Based)" },
        { heading: "User Application" },
        { heading: "Driver Application" }
    ];

    const smallCardData2 = [
        { heading: "Admin Panel(Web Based)" },
        { heading: "User Application" },
        { heading: "Driver Application" },
        { heading: "Vendor Login(Web Based)" },
        { heading: "Vendor Application" }
    ];

    const SmallCard = ({ heading }) => (
        <div className="bg-white rounded-lg p-4 mb-2">
            <h4 className="text-md font-semibold">{heading}</h4>
        </div>
    );

    const MainCard = ({ mainHeading, smallCards }) => (
        <div className="bg-gray-200 shadow-lg rounded-lg p-6 text-center mr-10 ml-30">
            <h3 className="text-xl font-bold mb-4">{mainHeading}</h3>
            <div className="space-y-2">
                {smallCards.map((card, index) => (
                    <SmallCard key={index} heading={card.heading} />
                ))}
            </div>
        </div>
    );

    return (
        <>
        <Helmet>
                <title>BELLWAY INFOTECH | Discover The Ultimate Movikat Innovating
                </title>
                <meta name="description" content="Bellway Infotech invites you to discover the ultimate movie-watching experience with Movikat, leading the way in cutting-edge technology solutions.Try it now.
" />
        
            </Helmet>
            <div className="sticky-nav">
                <CNavbar />
            </div>
            <div class="containerx mx-auto bg-black p-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
                        <h1 class="text-5xl font-bold mb-4 text-white ">MOVIKAT</h1>
                
                        <a href="https://play.google.com/store/apps/details?id=com.cybenkotechnologies.movikat"
              target="_blank" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group mr-4">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Demo</span>
                            <span class="relative invisible">Let's Talk</span>
                        </a>
                        <a href="/contact" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Buy Now</span>
                            <span class="relative invisible">Contact Us</span>
                        </a>

                        <h3 class="sm:text-2xl text-white mt-3">
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> / MoviKat
                        </h3>
                    </div>
                    <div class="md:w-1/2 mt-3 text-right">
                        <img src='https://i.pinimg.com/564x/8e/78/0f/8e780f579646cc5d3613b07cceac392b.jpg' alt="About Image" class="w-full h-auto" />
                    </div>
                </div>
            </div>


            {/* <div className="main-page">
        <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
        {isPopupVisible && <PopupForm onClose={togglePopup} />}
      </div> */}

            <div class="md:w-full text-center mb-4 md:mb-0 p-16">
                {/* <h1 class="sm:text-5xl  font-bold mb-4 text-black mt-16">"Accelerate Business Growth with
          Our AI Services"</h1> */}

                <div className="space-y-20 mt-12 mx-auto">
                    <div className="flex flex-col md:flex-row  text-black">
                        <img
                            src='https://i.pinimg.com/564x/e9/14/63/e91463104a9cc6f67ef7bf84e001f1bf.jpg'
                            alt="Bellway Grocery"
                            className="w-1/2 h-1/2  md:w-1/2 h-1/2"
                        />
                        <div style={{ backgroundColor: 'white' }} className="md:ml-28 mt-1 md:mt-0 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-left mt-3">Welcome to Bellway Infotech - Unveiling Movikat, Your Gateway to the Ultimate Movie-Watching Experience</h2>
                            <p className="mt-9 text-lg" style={{ textAlign: 'start' }}>At Bellway Infotech, we are passionate about changing the way you watch movies.<br/> With Movikat, our most recent innovation, we deliver you the greatest movie-watching experience, driven by cutting-edge technology. Whether you're a casual watcher or a cinephile, Movikat provides a smooth and immersive experience for discovering, watching, and enjoying movies like never before.
 Watch movies in amazing HD and 4K resolution, with crystal-clear graphics and vivid colors.Our innovative streaming technology provides uninterrupted playback, even on slower networks.
Access a large selection of movies from many genres, including the most recent blockbusters, timeless masterpieces, and independent gems.

                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <div className="mt-4 md:mt-0 text-center md:text-left mx-9">
                            <h2 className="text-4xl font-bold text-center">Our Product Benefits<br /></h2>

                            {/* Cards Container */}
                            <div style={{ borderRadius: '60%' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 p-6">
                                {cardData.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#006494] rounded-lg p-6 shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl "
                                    >
                                        <Card heading={card.heading} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-cover bg-center min-h-screen mt-1 ">
                <div className="container mx-auto p-4 ">
                    <ImageRow images={imagesWithPositions} />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen mt-24">
                <h2 className="text-4xl font-bold mb-8">Why Choose Movikat?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {cardData1.map((card, index) => (
                        <Card1 key={index} heading={card.heading} image={card.image} />
                    ))}
                </div>
            </div>
            <div className="w-full bg-white py-10 mt-4">
                <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-center text-black">What We Deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1">
                            <MainCard mainHeading="Single Vendor:" smallCards={smallCardData1} />
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <img src={burgir5} alt="Center Image"  />
                        </div>
                        <div className="col-span-1">
                            <MainCard mainHeading="Multi Vendor:" smallCards={smallCardData2} />
                        </div>
                    </div>
                </div>
            </div>





            {/*backgroundImage:`url(${background})`*/}
            <ProductStackCards/>
            <HomeTestimonials />

            {/* <FaqPage /> */}

            <Footer />
        </>
    )
}

export default Product2