// import React from "react";
// import './Product2.css';
// import CNavbar from "./CNavbar";
// import Applications2 from "./Applications2";
// import Footer from './Footer';
// function Product2(){
//     return (
//         <>
//             <CNavbar/>
//             <div className="rifaul-grocery2">
//                 <div className="hollow-border-rectangle"></div>
//                 <div className="text-container">
//                     <p className="bellway">BELLWAY</p>
//                     <p className="grocery">GROCERY</p>
//                 </div>
//             </div>
//             <Applications2/>
//             <Footer/>
//         </>
//     );
// }

// export default Product2;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CNavbar from './CNavbar';
import './ai.css'
// import FaqPage from './AIFaq';
import burgir from './assets/grocery2.jpg';
import burgir2 from './assets/grocery.jpg';


import Footer from './Footer';



import Slider2 from 'react-slick';
import Client1 from './assets/face1.jpeg'
import Client2 from './assets/face2.jpeg';
import Client3 from './assets/face3.jpeg';
import Client4 from './assets/face4.jpeg';


const Product2 = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    }



    const boxes = [
        {
            id: 1,
            text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
            image: Client1,
            name: 'Ana Perez',
            position: 'CEO, ITgers',
        },
        {
            id: 2,
            text: '"Highly recommend tapping into their unparalleled expertise and innovative solutions for any business striving to excel and thrive in today\'s fiercely competitive landscape."',
            image: Client2,
            name: 'Nick Divris',
            position: 'CTO, Coursera',
        },
        {
            id: 3,
            text: '"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success."',
            image: Client3,
            name: 'Yuki ',
            position: 'Manager, Alpine',
        },
        {
            id: 4,
            text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
            image: Client4,
            name: 'Zehan Darula',
            position: 'Designer, E-papcups',
        }
    ];;
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

    return (
        <>
            <div className="sticky-nav">
                <CNavbar />
            </div>
            <div class="containerx mx-auto  bg-black p-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
                        <h1 class="sm:text-8xl font-bold mb-4 text-white">Bellway Grocery</h1>
                        <h3 class="sm:text-2xl text-white">
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> / Bellway Grocery
                        </h3>
                    </div>
                    <div class="md:w-1/2 text-right">
                        <img src="https://i.pinimg.com/564x/76/47/91/76479136673ca92fb3ebfb7d1d552a26.jpg" alt="About Image" class="w-full h-auto" />
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
                    <div className="flex flex-col md:flex-row  text-white">
                        <img
                            src={burgir}
                            alt="Bellway Grocery"
                            className="w-1/2  md:w-1/3 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
                        />
                        <div style={{ backgroundColor: '#048722' }} className="md:ml-28 mt-4 md:mt-0 text-center md:text-left">
                            <h2 className="text-4xl font-semibold">Bellway Grocery</h2>
                            <p className="mt-9 text-lg"> A grocery application, also known as a grocery shopping app, is a mobile <br />or web-based application that allows users to shop for groceries and other household items online.These apps provide a convenient way for users to browse through a<br /> wide range of products.<br /><br />

                                Product Catalog: The app displays a comprehensive catalogue of grocery items, including fruits, vegetables, dairy products, canned goods, beverages, and more. Products are usually organized into categories for easy navigation.<br /><br />
                                Search and Filters: Users can search for specific products or use filters to narrow down their search results based on criteria like brand, price, dietary preferences, etc.<br /><br />

                                Shopping Cart: Users can add items to their shopping cart as they browse through the app. The cart keeps track of selected items until the user is ready to checkout.<br /><br />

                                Checkout and Payment: Users can review their cart, select the delivery or pickup options, and proceed to payment. The app supports various payment methods, including credit/debit cards, digital wallets, and cash on delivery.<br /><br />



                                Order History: The app typically maintains a history of past orders, making it easier for users to reorder items they frequently purchase.
                                <br /><br />
                                Deals and Discounts: Grocery apps often showcase special deals, discounts, and offers on various products to attract users and promote sales.

                                <br /><br />

                                Customer Support: The app may include a customer support feature, such as live chat or a helpline, to assist users with any issues or inquiries.


                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center mt-20" >
                        <img
                            src={burgir2}
                            alt="Grocery"
                            className="w-1/2 md:w-1/3" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
                        />
                        <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-9">
                            <h2 style={{ textAlign: 'left' }} className="text-4xl font-bold">Why is Bellway Grocery a useful resource for you?<br /></h2>
                            <p style={{ textAlign: 'left' }} className="mt-9 text-lg"> In today's hectic world, shopping for groceries can often feel like a daunting task. That's where Bellway Grocery comes in to save the day! Our service is designed to simplify your life by providing a seamless and efficient grocery shopping experience. With a vast selection of fresh produce, pantry essentials, and specialty items, we ensure you have everything you need at your fingertips.

<br/>Do you have specific dietary needs or preferences? Customize your order to suit your lifestyle. Whether you need organic, gluten-free, or dairy-free products, we cater to your unique requirements.<br/> Planning a family gathering or a weekly meal prep? The Bellway Grocery app makes it easy to place large orders, ensuring your pantry is always stocked with your favorite items.






</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-20 p-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap ">
                    
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


            <div className="w-full overflow-hidden mt-20">
                <div className="w-full text-center">
                    <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
                </div>
                <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
                    <Slider2 {...settings}>
                        {boxes.map((box, index) => (
                            <div key={index} className="px-2 sm:px-4">
                                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                                    <div className="client-image mb-4">
                                        <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                                    </div>
                                    <div className="text-gray-700 text-lg mb-4">{box.text}</div>
                                    <div className="absolute bottom-2 left-2 text-left">
                                        <p className="text-gray-800 font-bold mb-1">{box.name}</p>
                                        <p className="text-gray-600 text-sm">{box.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider2>
                </div>
            </div>

            {/* <FaqPage /> */}

            <Footer />
        </>
    )
}

export default Product2
