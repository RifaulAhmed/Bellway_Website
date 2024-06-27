
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CNavbar from './CNavbar';
import './Product2.css'
import './ai.css'
// import FaqPage from './AIFaq';
import burgir from './assets/grocery2.jpg';
import burgir2 from './assets/grocery.jpg';
import image4 from './assets/fresh1.png'
import image5 from './assets/fresh2.png'
import image6 from './assets/fresh3.png'
import image7 from './assets/fresh4.png'
import image8 from './assets/fresh5.png'
import image9 from './assets/fresh6.png'
import image1 from './assets/image 482.png'
import Footer from './Footer';
import icon1 from './assets/Icon1.png'
import icon2 from './assets/Icon2.png'
import icon3 from './assets/Icon3.png'
import icon4 from './assets/Icon4.png'
import icon5 from './assets/Icon5.png'
import icon6 from './assets/Icon6.png'
import {Helmet} from "react-helmet";
// import centerImage from './assets/Vector (2).png'
import image from './assets/image 527.png'
import Slider2 from 'react-slick';
<<<<<<< HEAD
import dpImage from './assets/dp-img3.jpg'
import HomeTestimonials from './HomeTestimonials'
import burgir5 from './assets/Burger5.png'
import background from './assets/grocery6.jpg'
import bbq from './assets/bbq2.jpeg'
import ProductStackCards from './ProductStackCards';
=======
import red from './assets/red.webp'
import HomeTestimonials from './HomeTestimonials';
<<<<<<< HEAD
import bbq from './assets/bbq2.jpeg';
=======
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5

>>>>>>> f8f03784ef416dcfa511ebabb160754882a237d8
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
        { url: image7, position: 230, position1: -60 },
        { url: image5, position: 5 },
        { url: image6, position: 230, position1: 35 },
        { url: image4, position: 40, position1: 82 },
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
                <title>BELLWAY INFOTECH - Application For Foodo | Service</title>
                <meta name="description" content="Experience buy the best with Bellway Infotech application for foodo service. Simplify this foodo application used with a seamless and user-friendly app. Shop now!" />
        
            </Helmet>
            <div className="sticky-nav">
                <CNavbar />
            </div>
            <div class="containerx mx-auto bg-black p-8">
                <div class="flex flex-col md:flex-row items-center">
<<<<<<< HEAD
                    <div class="md:w-1/2 text-left mb-38  p-16">
=======
                    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
<<<<<<< HEAD
                        <h1 class="text-5xl font-bold mb-4 text-white ">FRESH AND RED DELIVERY</h1>
                
                        <a href="https://play.google.com/store/apps/details?id=com.bellwayinfotech.freshnred_user"
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
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> / Fresh and red delivery
                        </h3>
                    </div>
                    <div class="md:w-1/2 text-right">
                        <img src={bbq} alt="About Image" class="w-full h-auto" />
=======
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
                        <h1 class="sm:text-8xl font-bold mb-4 text-white">Fresh and Red Delivery</h1>
                        <h3 class="sm:text-2xl text-white">
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> / Fresh and Red Delivery
                        </h3>
                    </div>
                    <div class="md:w-1/2 text-right">
<<<<<<< HEAD
                        <img src={bbq} alt="About Image" class="w-full h-auto" />
=======
                        <img src="https://i.pinimg.com/564x/f3/16/d6/f316d61da70a191d11fa6f804f356c62.jpg" alt="About Image" class="w-full h-auto" />
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
>>>>>>> f8f03784ef416dcfa511ebabb160754882a237d8
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

<<<<<<< HEAD
                <div className="space-y-20 mt-12 mx-auto">
                    <div className="flex flex-col md:flex-row  text-black">
                        <img
                            src='https://i.pinimg.com/564x/f4/e3/02/f4e302b6ac9bc58f628e09508c073ce1.jpg'
                            alt="Bellway Grocery"
                            className="w-1/2 h-1/2  md:w-1/2 h-1/2"
                        />
                        <div style={{ backgroundColor: 'white' }} className="md:ml-28 mt-1 md:mt-0 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-left mt-3">A Bellway food application provides numerous benefits for users:</h2>
                            <p className="mt-9 text-lg" style={{ textAlign: 'start' }}>Convenience: Food applications offer the convenience of browsing menus, placing orders, and making payments directly from your smartphone or computer. This eliminates the need for phone calls or physical visits to restaurants, saving time and effort.<br/><br/>Variety of Choices: These apps provide a wide range of restaurants and cuisines to choose from, allowing users to explore diverse options in their area. Whether you crave pizza, sushi, or vegan dishes, you can easily find and order your favorite meals.
=======
<<<<<<< HEAD
                <div className="space-y-20 mt-12 mx-auto">
=======
                <div  className="space-y-20 mt-12 mx-auto">
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
                    <div className="flex flex-col md:flex-row  text-white">
                        <img
                            src={red}
                            alt="Fresh and red delivery"
<<<<<<< HEAD
                            className="w-1/2  md:w-1/3 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)', borderRadius: '6%' }}
                        />
                        <div style={{ backgroundColor: 'white' }} className="md:ml-28 mt-4 md:mt-0 text-center md:text-left">
                            <h2 className="text-4xl font-bold" style={{ color: 'black' }}>Fresh And Red Delivery</h2>
                            <p className="mt-9 text-lg" style={{ color: 'black', textAlign: 'start' }}> App Features: <br /><br />

                                Seamless Ordering: Browse through a virtual marketplace featuring a wide selection of farm-fresh produce and premium red meats. With intuitive navigation, ordering your favourite ingredients has never been easier.<br />

                                Customization: Personalize your orders down to the last detail.<br /> Choose your preferred cuts of meat, quantities of produce, and any additional gourmet pairings or sauces you desire.<br />

                                Real-Time Updates: Stay in the loop with real-time updates on your order's status.<br /> From packing and dispatch to delivery, you'll always know where your culinary <br />treasures are.
                                <br />
                                Delivery Tracking: Track your delivery in real-time as it makes its way to your doorstep. No more guessing when your goodies will arrive!
                                <br />
                                Cooking Tips: Unlock professional cooking tips and techniques that enhance your culinary skills. Learn how to perfectly sear a steak or choose the<br /> ripest tomatoes for your dishes.<br /><br />

                                App Benefits:<br /><br />

                                Time-Saving Convenience: Skip the grocery store queues and the butcher shop rush. With the Fresh and Red Delivery App, your kitchen is always stocked with the finest ingredients.
                                <br />
                                Healthier Choices: Our commitment to quality means you can indulge in nutrient-rich red meats and fresh produce that contribute to a balanced and wholesome diet.
                                <br />
                                Sustainability: By choosing the Fresh and Red Delivery App, you're supporting eco-friendly practices through responsible sourcing and minimal packaging waste.
=======
                            className="w-1/2  md:w-1/3 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)',borderRadius:'6%' }}
                        />
                        <div style={{ backgroundColor: 'white' }} className="md:ml-28 mt-4 md:mt-0 text-center md:text-left">
                            <h2 className="text-4xl font-bold" style={{color:'black'}}>Fresh And Red Delivery</h2>
                            <p className="mt-9 text-lg"style={{color:'black',textAlign:'start'}}> App Features: <br/><br/>

Seamless Ordering: Browse through a virtual marketplace featuring a wide selection of farm-fresh produce and premium red meats. With intuitive navigation, ordering your favourite ingredients has never been easier.<br/>

Customization: Personalize your orders down to the last detail.<br/> Choose your preferred cuts of meat, quantities of produce, and any additional gourmet pairings or sauces you desire.<br/>

Real-Time Updates: Stay in the loop with real-time updates on your order's status.<br/> From packing and dispatch to delivery, you'll always know where your culinary <br/>treasures are.
<br/>
Delivery Tracking: Track your delivery in real-time as it makes its way to your doorstep. No more guessing when your goodies will arrive!
<br/>
Cooking Tips: Unlock professional cooking tips and techniques that enhance your culinary skills. Learn how to perfectly sear a steak or choose the<br/> ripest tomatoes for your dishes.<br/><br/>

App Benefits:<br/><br/>

Time-Saving Convenience: Skip the grocery store queues and the butcher shop rush. With the Fresh and Red Delivery App, your kitchen is always stocked with the finest ingredients.
<br/>
Healthier Choices: Our commitment to quality means you can indulge in nutrient-rich red meats and fresh produce that contribute to a balanced and wholesome diet.
<br/>
Sustainability: By choosing the Fresh and Red Delivery App, you're supporting eco-friendly practices through responsible sourcing and minimal packaging waste.
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5

>>>>>>> f8f03784ef416dcfa511ebabb160754882a237d8


                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <div className="mt-4 md:mt-0 text-center md:text-left mx-9">
                            <h2 className="text-4xl font-bold text-center">Our Product Benefits<br /></h2>

<<<<<<< HEAD
                            {/* Cards Container */}
                            <div style={{ borderRadius: '60%'}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 p-6">
                                {cardData.map((card, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#FF6868] rounded-lg p-6 shadow-md transform transition duration-500 hover:scale-105 hover:shadow-2xl text-nowrap  "
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
                <h2 className="text-4xl font-bold mb-8">Why Choose Bellway Food?</h2>
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
                            <img src='https://i.pinimg.com/564x/8a/b5/26/8ab5268f69ebe69e04ef76ba6a6447a2.jpg' alt="Center Image"  />
                        </div>
                        <div className="col-span-1">
                            <MainCard mainHeading="Multi Vendor:" smallCards={smallCardData2} />
=======
                    <div className="flex flex-col md:flex-row-reverse items-center mt-20" >
                        <img
                            src={fresh}
                            alt="Grocery"
                            className="w-1/2 md:w-1/3" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
                        />
                        <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-9">
                            <h2 style={{ textAlign: 'left' }} className="text-4xl font-bold">Why is Fresh and Red Delivery a useful resource for you?<br /></h2>
<<<<<<< HEAD
                            <p style={{ textAlign: 'left' }} className="mt-9 text-lg">A platform like this would be useful for handling online ordering, reservations for tables, delivery coordination, financial transactions, and other facets of a restaurant business. Our platform's fundamental feature is customization, which enables you to modify it to meet the particular needs of your restaurant.<br /> Our versatile system adjusts to your demands, regardless of whether you require specialized modules for customer relationship management, staff scheduling, or inventory management.<br /> To improve consumer interactions, you can tailor loyalty programs and marketing campaigns to your restaurant's identity and personalize the interface to provide your patrons a consistent experience. Because of our modular architecture, you may select the capabilities you require right now and add more as your company expands.
                            </p>
=======
                            <p style={{ textAlign: 'left' }} className="mt-9 text-lg">A platform like this would be useful for handling online ordering, reservations for tables, delivery coordination, financial transactions, and other facets of a restaurant business. Our platform's fundamental feature is customization, which enables you to modify it to meet the particular needs of your restaurant.<br/> Our versatile system adjusts to your demands, regardless of whether you require specialized modules for customer relationship management, staff scheduling, or inventory management.<br/> To improve consumer interactions, you can tailor loyalty programs and marketing campaigns to your restaurant's identity and personalize the interface to provide your patrons a consistent experience. Because of our modular architecture, you may select the capabilities you require right now and add more as your company expands.
</p>
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
>>>>>>> f8f03784ef416dcfa511ebabb160754882a237d8
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD





            {/*backgroundImage:`url(${background})`*/}
            <ProductStackCards/>
            <HomeTestimonials />

            {/* <FaqPage /> */}
=======
            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-20 p-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap ">
<<<<<<< HEAD

=======
                
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-bold mb-4">Trusted Web & Mobile App Development Company</h2>
                        <p className="mt-10">If you have any questions, feel free to reach out. We are here to help you with any queries you may have.</p>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Our Office</h3>
                            <p>B-405 Anmol Space Baikunth Dham, <br />
                                Khajrana Main Road,<br /> Indore, 452018</p>
                        </div>
                        <div className='mt-6'>
                            <h3 className="text-xl font-semibold">Contact Us </h3>
                            <p>Email: mailto:info@bellwayinfotech.com</p>
                            <p>Phone: +91-9981866409</p>
                        </div>
                    </div>

<<<<<<< HEAD

=======
                    
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
                        <form>
                            <div className="mb-4 flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                                    <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                                    <input className="w-full px-3 py-2 border rounded" type="tel" id="phone" name="phone" required />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label className="block text-sm font-medium mb-1" htmlFor="service">Service</label>
                                    <select className="w-full px-3 py-2 border rounded" id="service" name="service" required>
                                        <option value="">Select a service</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="support">Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                                <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button className="w-full bg-black text-white py-2 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <br /><br />


<<<<<<< HEAD
            <HomeTestimonials />
=======
            <HomeTestimonials/>
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
>>>>>>> f8f03784ef416dcfa511ebabb160754882a237d8

            <Footer />
        </>
    )
}

export default Product2